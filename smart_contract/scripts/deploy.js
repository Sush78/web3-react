const main = async() => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  // await lock.deployed();

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log(
    `Transactions deployed to: ${transactions.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async() => {
  try{
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(0);
  }
}

runMain();