[![Build Status](https://travis-ci.com/bh2smith/ganache-snapshot.svg?branch=master)](https://travis-ci.com/bh2smith/ganache-snapshot)

# Ganache Snapshot

This plugin provides an easy and robut way to make and revert ganache snapshots for smart contract development.
Generally speaking, this is a development tool for testing long sequences of transactions.

## Installing the Plugin

To install the latest stable version from NPM:

```console
$ npm install -g ganache-snapshot
```


## Configuration & Usage
Currently, the plugin must be activated on a per-project basis. If `ganache-snapshot` was installed to the Truffle project root, it will attempty to automatically include itself into `truffle-config.js`. If installed globally, you will need to manually add the following to `truffle-config.js` in the root directory of your Truffle project to enable the plugin:


```javascript
module.exports = {
    plugins: [ "ganache-snapshot" ]
};
```

Note also that, currently, the `development` network of the truffle configuration should be uncommented.
That is, development network is the hardcoded web3Provider and is expected to be declared.

### Usage Example - CLI

```bash
# Make sure that Ganache is running (in a separate terminal)

SNAP_ID=$(truffle run snapshot make)
# send some transaction...
truffle run snapshot revert $SNAP_ID
```

### Usage Example - truffle test

An example contract has been provided here and the use case is found in `test/example.js` with description.
Essentially, the recipe to follow is;

```js
const myContract = artifacts.require("SomeContract")
const { makeSnapshot, revertSnapshot } = require("ganache-snapshot")

const example = await myContract.new()           // Deploy contract
const snapID = (await makeSnapshot(web3)).result // Take a snapshot and keep returned ID
await example.sendTranaction()                   // Send TX
await revertSnapshot(snapID, web3)               // revert snapshot (by ID)
```
