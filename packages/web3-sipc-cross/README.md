## Installation
forked from ethereum/web3-eth, add simpleChain cross transaction api
### Node.js

```bash
npm install sipc-web3-cross
```

### In the Browser

Build running the following in the [web3.js][repo] repository:

```bash
npm run-script build-all
```

Then include `dist/web3-eth.js` in your html file.
This will expose the `Web3Eth` object on the window object.

## Usage

```js
// in node.js
var Web3SIPC = require('sipc-web3-cross');

var cross = new Web3SIPC('ws://localhost:8546');

cross.getCtxStats();
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/web3-eth.js
[npm-image]: https://img.shields.io/npm/v/web3-eth.svg
[npm-url]: https://npmjs.org/package/web3-eth
[deps-image]: https://david-dm.org/ethereum/web3.js/1.x/status.svg?path=packages/web3-eth
[deps-url]: https://david-dm.org/ethereum/web3.js/1.x?path=packages/web3-eth
[deps-dev-image]: https://david-dm.org/ethereum/web3.js/1.x/dev-status.svg?path=packages/web3-eth
[deps-dev-url]: https://david-dm.org/ethereum/web3.js/1.x?type=dev&path=packages/web3-eth
