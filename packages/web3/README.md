# web3
forked from ethereum [web3.js][eth-repo]. add simpleChain cross transaction api,
If you want to see the source code, please click [simplechain-org/web3.js][sipc-repo]，and select feature/sipc branch 
## apiDoc

## Installation
### Node.js

```bash
npm install @sipc/web3
```
### Example
```js
const rpcUrl = "http://192.168.4.104:8546"
const Web3  = require('@sipc/web3')
const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));
(async function () {
  const blockNumber =  await web3.eth.getBlockNumber()
  const chainId = await web3.cross.net.getId()
  const owner = await web3.cross.getCtxOwnerByPage("0x6407d2a4cd26fdd884dc2ed4a4f8882e413d84f6", 2, 1)
  const poolStats = await web3.cross.getPoolStats()
  const stats = await web3.cross.getCtxStats()
  for(const item of owner.data['909']){
    console.log(item.txHash)
  }
  console.log(blockNumber, chainId, owner, poolStats, stats )
})()
```
## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[eth-repo]: https://github.com/ethereum/web3.js
[sipc-repo]: https://github.com/simplechain-org/web3.js
