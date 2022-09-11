// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Teko = await ethers.getContractFactory("TekoNFT");
  const protocolAddress = "0x20CD495174B3e0f938C59dd6d1314250e6D02c74" //batataTesting
  const treasuryAddress = "0xE1CCFD3D07bD90bC0Ff6061b12E3A57b63Ed3eBD" //batataTesting
  const lodgeAddress = "0xa27c19907E8C57aC32D765883a446a5794cE341d" //batataTesting
  const tekoContract = await Teko.deploy(protocolAddress,treasuryAddress,lodgeAddress,60);
  await tekoContract.deployed()

  console.log(
    `tekoContract deployed to ${tekoContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
