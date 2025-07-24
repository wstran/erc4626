// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyVault is ERC4626 {
    constructor(
        address asset_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) ERC4626(IERC20(asset_)) {}
}
