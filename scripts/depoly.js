const hre = require("hardhat");

async function main() {
  const xToken = await hre.ethers.getContractFactory("XToken");
  const xContract = await xToken.deploy();
  console.log("tonContract address-->", xContract.target);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
