const Example = artifacts.require("ExampleContract")

module.exports = async (callback) => {
  try {
    const example = await Example.deployed()
    await example.incrementValue()
    console.log((await example.value.call()).toString())
    callback()
  } catch(err) {
    callback(err)
  }
}