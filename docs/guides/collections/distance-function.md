---
title: "📏 Changing the distance function"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

### Changing the distance function

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

`create_collection` also takes an optional `metadata` argument which can be used to customize the distance method of the embedding space by setting the value of `hnsw:space`.

```python
 collection = client.create_collection(
        name="collection_name",
        metadata={"hnsw:space": "cosine"} # l2 is the default
    )
```

</TabItem>
	
<TabItem value="js" label="Javascript">

`createCollection` also takes an optional `metadata` argument which can be used to customize the distance method of the embedding space by setting the value of `hnsw:space`

```js
let collection = client.createCollection({
  name: "collection_name",
  metadata: { "hnsw:space": "cosine" },
});
```

</TabItem>
	
</Tabs>


Valid options for `hnsw:space` are "l2", "ip, "or "cosine". The **default** is "l2" which is the squared L2 norm.

[ EQUATIONS NEED SOME LOVE ]

| Distance          | parameter | Equation |
| ----------------- | :-------: | -------- |
| Squared L2        |   'l2'    | \( d = \sum (A_i - B_i)^2 \) |
| Inner product     |   'ip'    | \( d = 1.0 - \sum (A_i \times B_i) \) |
| Cosine similarity | 'cosine'  | \( d = 1.0 - \frac{\sum (A_i \times B_i)}{\sqrt{\sum (A_i^2)} \cdot \sqrt{\sum (B_i^2)}} \) |

