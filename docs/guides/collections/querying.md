---
title: "🔍 Querying a Collection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

### Querying a Collection

Chroma collections can be queried in a variety of ways, using the `.query` method.

You can query by a set of `query_embeddings`.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.query(
    query_embeddings=[[11.1, 12.1, 13.1],[1.1, 2.3, 3.2], ...],
    n_results=10,
    where={"metadata_field": "is_equal_to_this"},
    where_document={"$contains":"search_string"}
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
const result = await collection.query({
    queryEmbeddings: [[11.1, 12.1, 13.1],[1.1, 2.3, 3.2], ...],
    nResults: 10,
    where: {"metadata_field": "is_equal_to_this"},
})
// input order
// query_embeddings - optional
// n_results - required
// where - optional
// query_texts - optional
```

</TabItem>

</Tabs>

The query will return the `n_results` closest matches to each `query_embedding`, in order.
An optional `where` filter dictionary can be supplied to filter by the `metadata` associated with each document.
Additionally, an optional `where_document` filter dictionary can be supplied to filter by contents of the document.

If the supplied `query_embeddings` are not the same dimension as the collection, an exception will be raised.

You can also query by a set of `query_texts`. Chroma will first embed each `query_text` with the collection's embedding function, and then perform the query with the generated embedding.

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
collection.query(
    query_texts=["doc10", "thus spake zarathustra", ...],
    n_results=10,
    where={"metadata_field": "is_equal_to_this"},
    where_document={"$contains":"search_string"}
)
```

You can also retrieve items from a collection by `id` using `.get`.

```python
collection.get(
	ids=["id1", "id2", "id3", ...],
	where={"style": "style1"}
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```javascript
await collection.query({
    nResults: 10, // n_results
    where: {"metadata_field": "is_equal_to_this"}, // where
    queryTexts: ["doc10", "thus spake zarathustra", ...], // query_text
})
```

You can also retrieve items from a collection by `id` using `.get`.

```javascript
await collection.get({
	ids: ["id1", "id2", "id3", ...], //ids
	where: {"style": "style1"} // where
})
```

</TabItem>

</Tabs>

`.get` also supports the `where` and `where_document` filters. If no `ids` are supplied, it will return all items in the collection that match the `where` and `where_document` filters.
