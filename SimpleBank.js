class SimpleBank {
    constructor() {
        this.accounts = {};
    }

  createAccount(accountId) {
    if (this.accounts[accountId] {
      throw new Error ('Account already exsts'); 
      }
        this.accounts[accountId] = 0;
    }

  deposit(accountId, amount) {
        if (!this.accounts[accountId]) {
            throw new Error('Account does not exist');
        }
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.accounts[accountId] += amount;
    }

  withdraw(accountId, amount) {
        if (!this.accounts[accountId]) {
            throw new Error('Account does not exist');
        }
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }

      }
        
}       

