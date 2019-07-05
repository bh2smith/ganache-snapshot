const Web3 = require("web3")
const { makeSnapshot, revertSnapshot } = require("./index.js")


/**
 * Outputs snapshot id as a hex string when running `truffle run snapshot make`,
 * or reverts snapshot by specified id when running `truffle run snapshot revert <snappID>`
 * @param {Config} config - A truffle-config object.
 */
module.exports = async (config) => {
  config.network = "development"  // This is a hack
  var web3 = new Web3(config.provider)

  // TODO - fix parsing
  if (config._.length > 3) {
    console.error("Error: This script requires arguments - <make> or <revert> <snapshotId>")
  }
  const [, todo, snapId] = config._
  if (todo == "make") {
    const snapID = await makeSnapshot(web3)
    console.log(snapID)
  } else if (todo == "revert") {
    await revertSnapshot(snapId, web3)
  }
}
