---
title: "📝  Creating Collections"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

---

## Using collections

Chroma lets you manage collections of embeddings, using the `collection` primitive.

### Creating, inspecting, and deleting Collections

Chroma uses collection names in the url, so there are a few restrictions on naming them:

- The length of the name must be between 3 and 63 characters.
- The name must start and end with a lowercase letter or a digit, and it can contain dots, dashes, and underscores in between.
- The name must not contain two consecutive dots.
- The name must not be a valid IP address.

Chroma collections are created with a name and an optional embedding function. If you supply an embedding function, you must supply it every time you get the collection.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection = client.create_collection(name="my_collection", embedding_function=emb_fn)
collection = client.get_collection(name="my_collection", embedding_function=emb_fn)
```

:::caution
If you later wish to `get_collection`, you MUST do so with the embedding function you supplied while creating the collection
:::

The embedding function takes text as input, and performs tokenization and embedding. If no embedding function is supplied, Chroma will use [sentence transformer](https://www.sbert.net/index.html) as a default.

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// CJS
const { ChromaClient } = require("chromadb");

// ESM
import { ChromaClient } from 'chromadb'
```

The JS client talks to a chroma server backend. This can run on your local computer or be easily deployed to AWS.

```js
let collection = await client.createCollection({
  name: "my_collection",
  embeddingFunction: emb_fn,
});
let collection2 = await client.getCollection({
  name: "my_collection",
  embeddingFunction: emb_fn,
});
```

:::caution
If you later wish to `getCollection`, you MUST do so with the embedding function you supplied while creating the collection
:::

The embedding function takes text as input, and performs tokenization and embedding.

</TabItem>

</Tabs>

You can learn more about [🧬 embedding functions](./embeddings.md), and how to create your own.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

Existing collections can be retrieved by name with `.get_collection`, and deleted with `.delete_collection`. You can also use `.get_or_create_collection` to get a collection if it exists, or create it if it doesn't.

```python
collection = client.get_collection(name="test") # Get a collection object from an existing collection, by name. Will raise an exception if it's not found.
collection = client.get_or_create_collection(name="test") # Get a collection object from an existing collection, by name. If it doesn't exist, create it.
client.delete_collection(name="my_collection") # Delete a collection and all associated embeddings, documents, and metadata. ⚠️ This is destructive and not reversible
```

</TabItem>
<TabItem value="js" label="JavaScript">

Existing collections can be retrieved by name with `.getCollection`, and deleted with `.deleteCollection`.

```javascript
const collection = await client.getCollection({name: "test"}) # Get a collection object from an existing collection, by name. Will raise an exception of it's not found.
await client.deleteCollection({name: "my_collection"}) # Delete a collection and all associated embeddings, documents, and metadata. ⚠️ This is destructive and not reversible
```

</TabItem>

</Tabs>

Collections have a few useful convenience methods.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.peek() # returns a list of the first 10 items in the collection
collection.count() # returns the number of items in the collection
collection.modify(name="new_name") # Rename the collection
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
await collection.peek(); // returns a list of the first 10 items in the collection
await collection.count(); // returns the number of items in the collection
```

</TabItem>

</Tabs>