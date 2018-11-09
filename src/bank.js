(function(exports){

  function Bank(){
    this.balance = 1000
    this.statement = []
  }

  Bank.prototype = {
    deposit: function(amount){
      this.balance += amount
      this.statement.push(new Trans("You've deposited ", amount, " and you're total balance is: ", this.balance))
    },
    withdraw: function(amount){
      this.balance -= amount
      this.statement = statement
      this.statement.push(new Trans("You've deposited ", amount, " and you're total balance is: ", this.balance))
    },
    viewState: function(){
      console.log(this.statement)
    }
  }
})(this)
