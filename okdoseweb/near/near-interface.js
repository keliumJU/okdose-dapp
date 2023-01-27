/**
 * Wrapper that allows access to the methods of a smart contract through a wallet.
 * @module NearInterface
 */
class NearInterface {
  /**
   * Initializes an object of type wallet
   * @param  {[Wallet]} walletToUse [wallet to access the near blockchain]
   */
  constructor({ walletToUse }) {
    this.wallet = walletToUse;
  }

  /**
   * Wrapper for accessing the view method of a smart contract
   * @param  {String} contractId [Name of the subaccount in the testnet or mainet network]
   * @param  {String} method     [Name of the method exposing the view function in the contract]
   * @param  {Object} args       [Arguments received by the view function in the smart contract]
   * @return {Prescription}      [Object that has the translation keys and the prescribed dosage]
   */
  async viewMethod(contractId, method, args = {}) {
    return await this.wallet.viewMethod({ contractId: contractId, method: method, args: args});
  }
}

export default NearInterface;
