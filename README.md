# Ganache Snapshot


### Dependencies 
Generally speaking, this is a development tool for testing etherem smart contracts for long sequences of transactions. That is to say, it is very likely your development environment already has truffle as a primary dependency.

1. [Truffle](https://www.trufflesuite.com/)
2. [Ganache](https://www.trufflesuite.com/ganache)


### Usage Example

```bash
# Make sure that Ganache is running (in a separate terminal)
ganache-cli
SNAP_ID=$(truffle exec cli.js make | grep '0x')
# send some transaction...
truffle exec cli.js revert $SNAP_ID
```