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
    const vault = await ERC4626Vault.deploy("0x0Eeef3C9AF589548d335c0C01F62A534103BC715", "My Vault Token", "vDAI");

    await vault.deployed();

    console.log(`Vault deployed to: ${vault.deployTransaction.hash}`);
}

// // Main entry point for the deployment script
main().catch((error) => {
    // Handle any errors that occur during deployment
    console.error("Error in deployment:", error);
    process.exitCode = 1; // Set the process exit code to indicate failure
});