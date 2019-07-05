const Migrations = artifacts.require("Migrations.sol")
const Example = artifacts.require("ExampleContract")

module.exports = function(deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(Example)
}
