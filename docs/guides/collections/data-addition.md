---
title: "➕ Adding Data"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

### Adding data to a Collection

Add data to Chroma with `.add`.

Raw documents:

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.add(
    documents=["lorem ipsum...", "doc2", "doc3", ...],
    metadatas=[{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
    ids=["id1", "id2", "id3", ...]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
await collection.add({
    ids: ["id1", "id2", "id3", ...],
    metadatas: [{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
    documents: ["lorem ipsum...", "doc2", "doc3", ...],
})
```

</TabItem>

</Tabs>

If Chroma is passed a list of `documents`, it will automatically tokenize and embed them with the collection's embedding function (the default will be used if none was supplied at collection creation). Chroma will also store the `documents` themselves. If the documents are too large to embed using the chosen embedding function, an exception will be raised.

Each document must have a unique associated `id`. Trying to `.add` the same ID twice will result in only the initial value being stored. An optional list of `metadata` dictionaries can be supplied for each document, to store additional information and enable filtering.

Alternatively, you can supply a list of document-associated `embeddings` directly, and Chroma will store the associated documents without embedding them itself.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.add(
    documents=["doc1", "doc2", "doc3", ...],
    embeddings=[[1.1, 2.3, 3.2], [4.5, 6.9, 4.4], [1.1, 2.3, 3.2], ...],
    metadatas=[{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
    ids=["id1", "id2", "id3", ...]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
await collection.add({
    ids: ["id1", "id2", "id3", ...],
    embeddings: [[1.1, 2.3, 3.2], [4.5, 6.9, 4.4], [1.1, 2.3, 3.2], ...],
    metadatas: [{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
    documents: ["lorem ipsum...", "doc2", "doc3", ...],
})

```

</TabItem>

</Tabs>

If the supplied `embeddings` are not the same dimension as the collection, an exception will be raised.

You can also store documents elsewhere, and just supply a list of `embeddings` and `metadata` to Chroma. You can use the `ids` to associate the embeddings with your documents stored elsewhere.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.add(
    embeddings=[[1.1, 2.3, 3.2], [4.5, 6.9, 4.4], [1.1, 2.3, 3.2], ...],
    metadatas=[{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
    ids=["id1", "id2", "id3", ...]
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
await collection.add({
    ids: ["id1", "id2", "id3", ...],
    embeddings: [[1.1, 2.3, 3.2], [4.5, 6.9, 4.4], [1.1, 2.3, 3.2], ...],
    metadatas: [{"chapter": "3", "verse": "16"}, {"chapter": "3", "verse": "5"}, {"chapter": "29", "verse": "11"}, ...],
})
```

</TabItem>

</Tabs>