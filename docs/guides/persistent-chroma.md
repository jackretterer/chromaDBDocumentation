---
title: 💾 Initiating a persistent Chroma Client
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

---

:::note Connecting to the backend
To connect with the JS client, you must connect to a backend running Chroma. See [Running Chroma in client/server mode](running-chroma.md) for how to do this.
:::

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

```python
import chromadb
```

You can configure Chroma to save and load from your local machine. Data will be persisted automatically and loaded on start (if it exists).

```python
client = chromadb.PersistentClient(path="/path/to/save/to")
```

The `path` is where Chroma will store its database files on disk, and load them on start.

</TabItem>
<TabItem value="js" label="JavaScript">

```js
// CJS
const { ChromaClient } = require("chromadb");

// ESM
import { ChromaClient } from 'chromadb'

const client = new ChromaClient();

```

</TabItem>

</Tabs>

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

The client object has a few useful convenience methods.

```python
# returns a nanosecond heartbeat. Useful for making sure the client remains connected.
client.heartbeat() 

# Empties and completely resets the database. ⚠️ This is destructive and not reversible.
client.reset() 
```

</TabItem>
<TabItem value="js" label="JavaScript">

The client object has a few useful convenience methods.

```javascript
# Empties and completely resets the database. 
# ⚠️ This is destructive and not reversible.
await client.reset() 
```

</TabItem>

</Tabs>