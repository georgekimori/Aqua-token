const hre = require("hardhat");

async function main() {
  const AquaToken = await hre.ethers.getContractFactory("AquaToken");
  const aquaToken = await AquaToken.deploy(100000000, 50);

  await aquaToken.deployed();

  console.log("Aqua Token deployed: ", aquaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});