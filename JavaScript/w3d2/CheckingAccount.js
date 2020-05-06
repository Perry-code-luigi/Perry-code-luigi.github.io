var Account = require("./account").Account;

class CheckingAccount extends Account{

	/**
     * Constructor for creating a new CheckingAccount object
     * 
     * @param {number} overdraft the overdraft for this account
     * @param {number} number the number for this account
     */
	constructor(number,overdraft){
		super(number);
		this._overdraft = overdraft;
	}

	/**
     * Accessor for the 'private' overdraft field
     * 
     * @returns {number} overdraft for this account
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Method to set overdraft into the account
     * 
     * @param {number} overdraft to be set into the account 
     */
    setOverdraft(amount) {
        this._overdraft = amount;
    }
 /**
     * Method to take overdraft money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when overdraft is less than or equal to zero
     * @throws {Error} when the account has insufficient overdraft funds (balance)
     */
withdraw(amount){
    let over=this._overdraft;
    
    if (amount <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (this._balance - amount < -over) {
        throw Error("Insufficient funds");
    }
    
    this._balance -= amount;
 

}
 /**
     * @returns {string} representation of this account
     */
toString() {
    return "CheckingAccount " + super.getNumber() + ": balance " + super.getBalance() + " Overdraft "+ this._overdraft;
}




}
module.exports = {
    CheckingAccount : CheckingAccount
}