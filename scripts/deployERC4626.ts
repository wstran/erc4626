import { ethers } from "hardhat"; // Import ethers.js from the Hardhat framework

async function main() {
    // Retrieve the current network information from the ethers provider
    const network = await ethers.provider.getNetwork();

    // Log the name of the network where the contract is being deployed (e.g., "sepolia" or "mainnet")
    console.log(`Deploying to network: ${network.name}`);

    console.log("Deploying ERC4626 Vault contract...");

    // Get the contract factory for the ERC4626 vault
    const ERC4626Vault = await ethers.getContractFactory("MyVault");

    // Deploy the ERC4626 vault with the asset address
    const vault = await ERC4626Vault.deploy("0xa7E134BD162883d580D86e3D1099a93FE3CFB8DD", "My Vault Token", "vDAI");

    await vault.deployed();

    console.log('------- Deployment successful -------');

    console.log(`Deployer address: ${vault.deployTransaction.from}`);

    console.log(`Vault deployed to: ${vault.deployTransaction.hash}`);

    console.log(`Vault name: ${await vault.name()}`);

    console.log(`Vault symbol: ${await vault.symbol()}`);

    console.log(`Asset address: ${await vault.asset()}`);

    console.log(`Total assets: ${await vault.totalAssets()}`);

    console.log(`Deployed contract address: ${vault.address}`);
}

// // Main entry point for the deployment script
main().catch((error) => {
    // Handle any errors that occur during deployment
    console.error("Error in deployment:", error);
    process.exitCode = 1; // Set the process exit code to indicate failure
});