pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";


contract EDCoin is ERC20Mintable {

    string public constant name = "ED COIN"; // solium-disable-line uppercase
    string public constant symbol = "EDC"; // solium-disable-line uppercase
    uint8 public constant decimals = 18; // solium-disable-line uppercase

}