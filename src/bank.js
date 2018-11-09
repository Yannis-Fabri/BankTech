function Bank(){
  this.balance = balance
  this.statement = statement
}

Bank.prototype = {
  deposit: function(amount){
    this.balance += amount
    this.statement = statement
  },
  withdraw: function(amount){
    this.balance -= amount
    this.statement = statement
  },
  viewState: function(){
    console.log(Bank.statement)
  }
}
