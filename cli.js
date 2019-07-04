const web3 = require("web3")
const { makeSnapshot, revertSnapshot } = require("./index.js")

module.exports = async (callback) => {
  try {
    const args = process.argv.slice(4)
    if (args.length > 2) {
      callback("Error: This script requires arguments - <make> or <revert> <snapshotId>")
    }
    const [todo, snapId] = args

    if (todo == "make") {
    //   console.log("Making snapshot")
      const snapID = (await makeSnapshot(web3)).result
      callback(snapID)
    } else if (todo == "revert") {
    //   console.log(`Reverting snapshot ${snapId}`)
      await revertSnapshot(snapId, web3)
      callback()
    }
  } catch(error) {
    callback(error)
  }
}
