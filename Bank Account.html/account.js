// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

function BankAccount(accountNumber,name,type,balance,isActive){
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.isActive=isActive;

    this.deposit =function(amount){
        this.balance+=amount;
        console.log(`Your Updated balance is ${this.balance}`)
    }
    this.withdrawl=function(amount){
        if(this.balance > amount){
           this.balance-=amount
           console.log(`Your updated balance is ${this.balance}`)
        }
        else{
            console.log("Insufficent Balance")
        }
    }
    this.isActive1=function(){
        if(this.balance <0){
           console.log("Account is InActive") 
        }
        else{
            console.log("Account is Active")
        }
    }
}
account1=new BankAccount(12344,"shaurya",'saving',4000,true);
account2=new BankAccount(123433,"nipun",'current',2000,true);
account3=new BankAccount(1236564,"Harsh",'saving',400,false);
// account1.deposit(3000);
// account1.withdrawl(6000)

let arr=[account1,account2,account3];
let sum=0
arr.forEach((ele)=>{
    if(ele.isActive==true
        ){
           let res=ele.balance 
           sum+=res
        }
        else{
            sum+=0;
        }
})
console.log(`Your total Balance is ${sum}`)




































