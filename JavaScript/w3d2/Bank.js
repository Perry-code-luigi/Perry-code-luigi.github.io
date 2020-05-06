let SavingsAccount = require("./SavingsAccount").SavingsAccount;
let CheckingAccount = require("./CheckingAccount").CheckingAccount;
let Account = require("./account").Account;

class Bank {
  constructor(){
    this.Account = [];
    
 }
 addAccount(acc) {
     this.Account.push(acc);
     this.Number++;
 }
 addSavingsAccount(number,interest) {
     this.Account.push(new SavingsAccount(number,interest));
     this.Number++;
 }
 addCheckingAccount(number,overdraft) {
     this.Account.push(new CheckingAccount(number,overdraft));
     this.Number++;
 }
 closeAccount(number) {
   this.Account = this.Account.filter(x => x.number === number);
 }
 accountReport(){
   let str="";
   this.Account.forEach(x => str+=x.toString()+"\n");
   return str;
 }
}
module.exports = {
  Bank: Bank
}