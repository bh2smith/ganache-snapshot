const { makeSnapshot, revertSnapshot } = require('./index.js')

module.exports = async (callback) => {
  try {
    const arguments = process.argv.slice(4)
    if (arguments.length > 2) {
      callback("Error: This script requires arguments - <make> or <revert> <snapshotId>")
    }
    const [todo, snapId] = arguments

    if (todo == "make") {
      console.log("Making snapshot")
      const snapID = (await makeSnapshot(web3)).result
      callback(snapID)
    } else if (todo == "revert") {
      console.log(`Reverting snapshot ${snapId}`)
      await revertSnapshot(snapId, web3)
      callback()
    }
  } catch(error) {
    callback(error)
  }
}

// const run = async (callback) => {
//     try {
//     //   const arguments = process.argv.slice(4)
//     const arguments = process.argv.slice(2)
//       if (arguments.length > 2) {
//         callback("Error: This script requires arguments - <make> or <revert> <snapshotId>")
//       }
//       const [todo, snapId] = arguments
  
//       if (todo == "make") {
//         console.log("Making snapshot")
//         const snapID = (await makeSnapshot(web3)).result
//         callback(snapID)
//       } else if (todo == "revert") {
//         console.log(`Reverting snapshot ${snapId}`)
//         await revertSnapshot(snapId, web3)
//         callback()
//       }
//     } catch(error) {
//       callback(error)
//     }
//   }
