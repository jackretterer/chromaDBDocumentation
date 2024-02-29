---
slug: /examples/examples-text
title: 📝  Text
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang" queryString>
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

### Installation

```bash
pip install chromadb # ran in shell or can be used in notebook with "!"
```

### Import

```py
import chromadb
```

### Getting Started

```py
chroma_client = chromadb.Client()
collection = chroma_client.create_collection(name="my_collection")
```

For a link to the full code please visit this link.

</TabItem>
<TabItem value="js" label="JavaScript">

### Installation

```sh
npm install --save chromadb # or "yarn add chromadb"
```

### Import


</TabItem>
</Tabs>