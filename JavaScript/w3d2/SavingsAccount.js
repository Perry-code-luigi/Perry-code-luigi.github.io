var Account = require("./account").Account;


class SavingsAccount extends Account{

	/**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} interest the interest for this account
     */
	constructor(number,interest){
		super(number);
		this._interest = interest;
	}

	/**
     * Accessor for the 'private' interest field
     * 
     * @returns {number} interest for this account
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Method to set interest into the account
     * 
     * @param {number} interest percentage to be set into the account 
     */
    setInterest(interest) {
        this._interest = interest;
    }
    /**
     * Method to add interest into the account
     * 
     */
    addInterest() {
    	super.deposit((super.getBalance() * this._interest / 100));
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "SavingsAccount " + super.getNumber() + ": balance " + super.getBalance() + " Interest "+ this._interest;
    }

}

module.exports = {
    SavingsAccount: SavingsAccount
}