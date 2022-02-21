const CuriousPawoneer = artifacts.require('CuriousPawoneer')

// truffle uses 'contract' instead of 'describe' in mocha.
// mocha & chai & web3 is bundled already in truffle project. 
// Ethereum client should be running before test
contract('CuriousPawoneer', accounts => {
    it('should mint a NFT', () => {
        // some logic here
        // check this truffle example : https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript.html
    })

    it('should return 1 ether', async () => {
        // arrange-act-assert test pattern
        // arrange
        let instance = await CuriousPawoneer.deployed()
        
        // act
        // assert
        assert.equal(web3.utils.fromWei('1000000000000000000', 'ether'), '1')
    })
})