// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract World {
    mapping(address => bool) public entered;

    function enter() public {
        entered[msg.sender] = true;
    }

    function leave() public {
        entered[msg.sender] = false;
    }    
}