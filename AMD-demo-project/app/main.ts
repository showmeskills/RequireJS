
require.config({
    paths:{
        "ko":"../libs/knockout/knockout-latest",
        "Account":"./model/Account",
        "AccountViewModel":"./viewModel/AccountViewModel",
    }
})

define(["ko","Account","AccountViewModel"],function(ko:KnockoutStatic,Account:any,AccountViewModel:any){
    const account = new Account();
    const accountViewModel = new AccountViewModel(account);
    ko.applyBindings(accountViewModel)
})