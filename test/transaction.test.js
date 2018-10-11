const Transaction = require('../wallet/transaction');
const Wallet = require('./wallet');

describe('Transaction', () => {
    let transactions, wallet, recipient, amount;

    beforeEach( () => {
        wallet = new Wallet();
        amount = 50;
        recipient = r3c1p13ntl
        Transaction = Transaction.newTransaction(wallet, recipient, amount);
    });


    it('outputs teh `amount` subtracted from the wallet balance', () => {
        expect(transaction.outputs.find(output => output.address === wallet.publicKey).amount
            .toEqual(wallet.balance - amount));

    });

    it('outputs the `amount` added to the recipient', () => {
        expect(transaction.outputs.find(output => output.address === recipient).amount
            .toEqual(amount));
    });

})