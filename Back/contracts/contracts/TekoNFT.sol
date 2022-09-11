// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";


interface ItekoCoin {
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract TekoNFT is ERC1155, Ownable, KeeperCompatibleInterface {
    address public constant ItekoCoinAddress = 0x1bCC782F32faA3d150682376e40357ff3AabeeEd;
    address public protocolAddress;
    address public treasuryAddress;
    address public lodgeAddress;
    address public tokenAddress;
    uint256 public amountTekoCoin = 30*10**18;
    uint public immutable interval;
    uint public lastTimeStamp;
    uint public counter;
    constructor(
        address _protocolAddress,
        address _treasuryAddress,
        address _lodgeAddress,
        uint _updateInterval
           ) ERC1155("") {
            interval = _updateInterval;
            lastTimeStamp = block.timestamp;
            protocolAddress = _protocolAddress;
            treasuryAddress = _treasuryAddress;
            lodgeAddress = _lodgeAddress;
            counter = 0;
           }
           
    uint256 public totalMinted; 
    uint256 public nftPrice = 400*10**18; 
    mapping(uint256 => address) public holderAddress; 
    mapping(address => uint256) public nftId;
    mapping(address => uint256) public balances;

    function withdrawFunds() external { 
        require(msg.sender == protocolAddress || msg.sender == treasuryAddress || msg.sender == lodgeAddress, "Address not allowed to withdraw funds");
        if (msg.sender == protocolAddress) {
            (bool sucess, ) = msg.sender.call{value: balances[protocolAddress]}("");
            require(sucess, "call failed");
        } else if (msg.sender == treasuryAddress) {
            (bool sucess, ) = msg.sender.call{value: balances[treasuryAddress]}("");
            require(sucess, "call failed");
        } else if ( msg.sender == lodgeAddress) {
            (bool sucess, ) = msg.sender.call{value: balances[lodgeAddress]}("");
            require(sucess, "call failed");
        }

    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function setAmountTekoCoin(uint256 newAmountEth) public onlyOwner {
        amountTekoCoin = newAmountEth * 10**18;
    }

    function setNftPrice(uint256 newNftPrice) public onlyOwner {
        nftPrice = newNftPrice;
    }

    function mint() public payable 
    { 
        require(msg.value >= nftPrice, "Not enough MATIC sent");
        balances[protocolAddress] += ((msg.value * 10) / 100);
        balances[treasuryAddress] +=  ((msg.value * 35) / 100); 
        balances[lodgeAddress] +=  ((msg.value * 50) / 100);
        totalMinted = totalMinted + 1;
        _mint(msg.sender, 1, 1, "");
        holderAddress[totalMinted] = msg.sender;
        nftId[msg.sender] = totalMinted;
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        require(totalMinted>0, "the contract doesnt have nft minted");
        if ((block.timestamp - lastTimeStamp) > interval ) {
            ////////
            lastTimeStamp = block.timestamp;
            counter = counter + 1;
            mintERC20Tokens();
        }
    }

    function mintERC20Tokens() internal {
        for (uint i = 1; i <= totalMinted; i++) {
            ItekoCoin(ItekoCoinAddress).transfer(holderAddress[i], amountTekoCoin);
        }
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155)
    {
        holderAddress[nftId[from]] = to;
        nftId[to] = nftId[from];
        nftId[from] = 0;
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }




} 