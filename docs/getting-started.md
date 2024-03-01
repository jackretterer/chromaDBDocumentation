---
sidebar_position: 2
title: "🔑 Getting Started"
---

# 🔑 Getting started

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang" queryString>
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

---

This page shows you how to install and get started with the Chroma client.

### 1. Install

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```py
# run in shell
pip install chromadb 
```

Find [chromadb on PyPI](https://pypi.org/project/chromadb/).


</TabItem>
<TabItem value="js" label="JavaScript">

```sh
npm install --save chromadb # yarn add chromadb
```

Find [chromadb on npm](https://www.npmjs.com/package/chromadb).

You will need to install the Chroma python package to use the Chroma CLI and backend server.

```sh
pip install chromadb
```

Find [chromadb on PyPI](https://pypi.org/project/chromadb/).

Alternatively, you can use a Docker container to run the Chroma backend server. Follow this guide [ CREATE GUIDE ].

</TabItem>

</Tabs>

### 2. Get the Chroma Client

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
import chromadb
chroma_client = chromadb.Client()
```

</TabItem>
<TabItem value="js" label="JavaScript">

Start the Chroma backend server:

```sh
chroma run --path /db_path
```

Then create a client which connects to it:

```js
// CJS
const { ChromaClient } = require("chromadb");

// ESM
import { ChromaClient } from 'chromadb'

const client = new ChromaClient();
```

</TabItem>

</Tabs>

### 3. Create a collection

Collections are where you'll store your embeddings, documents, and any additional metadata. You can create a collection with a name:

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection = chroma_client.create_collection(name="my_collection")
```

</TabItem>
<TabItem value="js" label="JavaScript">

For this example, we want to generate embeddings from text. OpenAI's `ada-002` model is popular, and a quick [signup](https://openai.com/api/). Grab your API key and come back!

```js
// CJS
const { OpenAIEmbeddingFunction } = require("chromadb");

// ESM
import { OpenAIEmbeddingFunction } from 'chromadb'

const embedder = new OpenAIEmbeddingFunction({
  openai_api_key: "your_api_key",
});
const collection = await client.createCollection({
  name: "my_collection",
  embeddingFunction: embedder,
});
```

</TabItem>

</Tabs>

### 4. Add some text documents to the collection

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

Chroma will store your text, and handle embedding, and [indexing](./concepts/indexes.md) automatically.

```python
collection.add(
    documents=["This is a document", "This is another document"],
    ids=["id1", "id2"]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

Chroma will store your text, and handle embedding, and [indexing](./concepts/indexes.md) automatically.

```js
await collection.add({
  ids: ["id1", "id2"],
  metadatas: [{ source: "my_source" }, { source: "my_source" }],
  documents: ["This is a document", "This is another document"],
});
```

</TabItem>

</Tabs>


### 5. Query the collection

You can query the collection with a list of query texts, and Chroma will return the `n` most similar results. It's that easy!

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
results = collection.query(
    query_texts=["This is a query document"],
    n_results=2
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const results = await collection.query({
  nResults: 2,
  queryTexts: ["This is a query document"],
});
```

</TabItem>

</Tabs>

### 6. View Results

Now you can view the results to get an understanding of the return types.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
print(results)

# returned output example
{
  'ids': [['id1', 'id2']],
  'distances': [[0.7111214399337769, 1.0109773874282837]],
  'metadatas': [[None, None]],
  'embeddings': None,
  'documents': [['This is a document', 'This is another document']],
  'uris': None,
  'data': None
}
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const results = await collection.query({
  nResults: 2,
  queryTexts: ["This is a query document"],
});
```

</TabItem>

</Tabs>

Note: By default data stored in Chroma is ephemeral (temporary) making it easy to prototype scripts. However, if you'd like to make your data persistent (permanent), you can checkout the [Usage Guide](./usage-guide.md) for more info.

## 📚 Next steps

- Chroma is designed to be simple enough to get started with quickly and flexible enough to meet many use-cases. Checkout the following examples for a quick [end-to-end example](./examples/index.md).
- You can use your own embedding models, query Chroma with your own embeddings, and filter on metadata. To learn more about Chroma, check out the [Main Concepts](./concepts/index.md), [Usage Guide](./guides/index.md) and [API Reference](./api-reference.md).
- Chroma integrates with a host of services and libraries making it very easy to build AI applications. Check out the [integrations](./integrations) page to learn more.
- You can [deploy a persistent instance](./deployment) of Chroma to an external server, to make it easier to work on larger projects or with a team.
