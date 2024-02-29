---
title: 🏃 Running Chroma
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="select-language">Select a language</div>

<Tabs queryString groupId="lang">
<TabItem value="py" label="Python"></TabItem>
<TabItem value="js" label="JavaScript"></TabItem>
</Tabs>

## Running Chroma in client/server mode

<Tabs queryString groupId="lang" className="hideTabSwitcher">
<TabItem value="py" label="Python">

Chroma can also be configured to run in client/server mode. In this mode, the Chroma client connects to a Chroma server running in a separate process.

To start the Chroma server, run the following command:

```bash
chroma run --path /db_path
```

Then use the Chroma HTTP client to connect to the server:

```python
import chromadb
chroma_client = chromadb.HttpClient(host='localhost', port=8000)
```

That's it! Chroma's API will run in `client-server` mode with just this change. If you are interested in getting Chroma to production check out our [Production section](../production/index.md)

<!-- #### Run Chroma inside your application

To run the Chroma docker from inside your application code, create a docker-compose file or add to the existing one you have.

1. Download [`docker-compose.server.example.yml`](https://github.com/chroma-core/chroma/blob/main/docker-compose.server.example.yml) file and [`config`](https://github.com/chroma-core/chroma/tree/main/config) folder along with both the files inside from [GitHub Repo](https://github.com/chroma-core/chroma)
2. Rename `docker-compose.server.example.yml` to `docker-compose.yml`
3. Install docker on your local machine. [`Docker Engine`](https://docs.docker.com/engine/install/) or [`Docker Desktop`](https://docs.docker.com/desktop/install/)
4. Install docker compose [`Docker Compose`](https://docs.docker.com/compose/install/)

Use following command to manage Dockerized Chroma:
- __Command to Start Chroma__: `docker-compose up -d`
- __Command to Stop Chroma__: `docker-compose down`
- __Command to Stop Chroma and delete volumes__
This is distructive command. With this command volumes created earlier will be deleted along with data stored.: `docker-compose down -v` -->

#### Using the python http-only client

If you are running chroma in client-server mode, you may not need the full Chroma library. Instead, you can use the lightweight client-only library.
In this case, you can install the `chromadb-client` package. This package is a lightweight HTTP client for the server with a minimal dependency footprint.

```python
pip install chromadb-client
```

```python
import chromadb
# Example setup of the client to connect to your chroma server
client = chromadb.HttpClient(host='localhost', port=8000)
```

Note that the `chromadb-client` package is a subset of the full Chroma library and does not include all the dependencies. If you want to use the full Chroma library, you can install the `chromadb` package instead.
Most importantly, there is no default embedding function. If you add() documents without embeddings, you must have manually specified an embedding function and installed the dependencies for it.

</TabItem>
<TabItem value="js" label="JavaScript">

To run Chroma in client server mode, first install the chroma library and CLI via pypi:

```bash
pip install chromadb
```

Then start the Chroma server:

```bash
chroma run --path /db_path
```

The JS client then talks to the chroma server backend.

```js
// CJS
const { ChromaClient } = require("chromadb");

// ESM
import { ChromaClient } from 'chromadb'

const client = new ChromaClient();
```

You can also run the Chroma server in a docker container, or deployed to a cloud provider. See the [deployment docs](./deployment.md) for more information.

</TabItem>

</Tabs>