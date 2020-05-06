let SavingsAccount = require("../SavingsAccount").SavingsAccount;
let CheckingAccount = require("../CheckingAccount").CheckingAccount;
let Bank = require("../Bank").Bank;

var assert = require("assert");

describe("SavingsAccount Class", function () {
  describe("testing the get-number", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      let a = new SavingsAccount(acc);

      assert.equal(a.getNumber(), acc, "this should be 9876543234567");
    });
  });
});

describe("SavingsAccount", function () {
  describe("testing the get-interset", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const interest = 11;
      let a = new SavingsAccount(acc, interest);

      assert.equal(a.getInterest(), interest, "this should be 11");
    });
  });
});

describe("SavingsAccount", function () {
  describe("testing the set-interst", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const interest = 10000;
      let a = new SavingsAccount(acc, interest);
      a.setInterest(interest);

      assert.equal(a.getInterest(), interest, "this should be 10000");
    });
  });
});

describe("SavingsAccount", function () {
  describe("testing the addInterest", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const interest = 2;
      let a = new SavingsAccount(acc, interest);
      a.deposit(200);
      a.addInterest();

      assert.equal(204, a.getBalance());
    });
  });
});
describe("CheckingAccount Class", function () {
  describe("testing the withdraw", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const over = 500;
      let a = new CheckingAccount(acc, over);
      a.deposit(1000);
      a.withdraw(1500);
      assert.equal(a.getBalance(), -500);
    });
  });
});

describe("CheckingAccount Class", function () {
  describe("testing the getOverdraft", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const over = 500;
      let a = new CheckingAccount(acc, over);

      assert.equal(a.getOverdraft(), over);
    });
  });
});

describe("CheckingAccount Class", function () {
  describe("testing the setOverdraft", function () {
    it("should return -1 when the value is not present", function () {
      const acc = 9876543234567;
      const over = 500;
      let a = new CheckingAccount(acc, over);
      a.setOverdraft(1000);

      assert.equal(a.getOverdraft(), 1000);
    });
  });
});

describe("Bank Class", function () {
  describe("testing AddSavingAccount", function () {
    it("Should print all accounts", function () {
      let bank = new Bank();
      const acc = 9876543234567;
      const interest = 3;
      let a = new SavingsAccount(acc, interest);
      a.deposit(1000);
       bank.addAccount(a);
     
     
     
      assert.equal(bank.accountReport(),"SavingsAccount 9876543234567: balance 1000 Interest 3\n");
    });
  });
});
describe("Bank Class", function () {
  describe("testing AddChekingAccount", function () {
    it("Should print all accounts", function () {
      let bank = new Bank();
      const acc = 9876543234567;
      const over = 300;
      bank.addCheckingAccount(acc,over)
   assert.equal(bank.accountReport(),"CheckingAccount 9876543234567: balance 0 Overdraft 300\n");
    });
  });
});

describe("Bank Class", function () {
  describe("testing AddAccount", function () {
    it("Should print all accounts", function () {
      let bank = new Bank();
      const acc = 9876543234567;
      const over = 300;
      let a = new CheckingAccount(acc,over);
      a.deposit(100);
     
      bank.addAccount(a);
   assert.equal(bank.accountReport(),"CheckingAccount 9876543234567: balance 100 Overdraft 300\n");
    });
  });
});
