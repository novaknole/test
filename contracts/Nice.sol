/*
 * SPDX-License-Identifier:    GPL-3.0
 */

pragma solidity 0.6.8;
pragma experimental ABIEncoderV2;

contract Nice {
    
    uint public x = 1;

    constructor() public {
       
    }

    function callit() public  {
        while(x <= 3500) {
            x = x + 1;
        }
    }

}
