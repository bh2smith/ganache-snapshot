const web3 = require("web3")

const jsonrpc = "2.0"
const id = 0
const send = function (method, params, web3Provider) {
  return new Promise(function(resolve, reject) {
    web3Provider.currentProvider.send({ id, jsonrpc, method, params }, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

// make ganache snapshot 
const makeSnapshot = async function(web3Provider=web3) {
  const response = await send("evm_snapshot", [], web3Provider)
  return response.result

}

// revert ganache snapshot 
const revertSnapshot = async function(snapID, web3Provider=web3) {
  await send("evm_revert", [snapID], web3Provider)
}

module.exports = {
  makeSnapshot,
  revertSnapshot
}
