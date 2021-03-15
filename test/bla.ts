import { expect } from 'chai'
import { keccak256, solidityPack } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import { deployments, ethers, network, waffle } from 'hardhat'


describe('Govern Base Factory with mocked contracts', function () {

  let contract:any;
  

  before(async () => {

    // Deploy Mocks
    contract = await ((await ethers.getContractFactory(
        'Nice'
    ))).deploy();
    console.log(contract.address);

  })

  it("test here", async () => {
    console.log("test");

    let tx = contract.callit();

    const { hash } = await tx
    const { gasUsed } = await waffle.provider.getTransactionReceipt(hash)
    console.log(gasUsed.toString());

  })
})
