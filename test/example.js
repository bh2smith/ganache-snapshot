const Example = artifacts.require("ExampleContract")

const { makeSnapshot, revertSnapshot } = require("ganache-snapshot")

contract("ExampleContract", async () => {
  describe("incrementValue()", () => {
    it("makes snapshot, increments value and reverts snapshot", async () => {
      const example = await Example.new()                      // Deploy new contract instance
      const snapID = (await makeSnapshot(web3)).result         // Take a snapshot and save the returned ID
      await example.incrementValue()                           // increment value "complicated sequence of transactions"
      assert.equal(1, (await example.value.call()).toNumber()) // check that value was incremented
      await revertSnapshot(snapID, web3)                       // revert snapshot (by ID)
      assert.equal(0, (await example.value.call()).toNumber()) // check that increment was reverted
    })

  })
})