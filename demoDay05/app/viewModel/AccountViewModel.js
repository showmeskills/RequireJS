require.config({
    paths: {
        "Account": "./model/Account",
    }
})
define(["ko","Account"],(ko,Account)=>{
    const AccountViewModel = function(){
        this.Title = ko.observable("bank details")
        this.Accounts = ko.observableArray([
           new Account.Account("Terry", 10000),
           new Account.Account("Terry1", 20000),
           new Account.Account("Terry2", 30000),
           new Account.Account("Terry3", 40000),
        ])
        this.HandleAdd = ()=>{
            this.Accounts.push(
                new Account.Account("Terry5",50000)
            )
        }
    }
    return{
        AccountViewModel
    }
})