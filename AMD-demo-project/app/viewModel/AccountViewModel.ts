



define(["acc","ko"],function(acc:any,ko: KnockoutStatic){
    const {Account} = acc;
    const AccountViewModel = function(this:AccountViewModel){
        this.Accounts = ko.observableArray([
            new Account("Terry",10000)
        ])
        this.NewName = ko.observable("");
        this.NewBalance = ko.observable(0);
        this.HandleClick = ()=>{
            this.Accounts.push(new Account(this.NewName(),this.NewBalance()))
            this.NewName("");
            this.NewBalance(0);
        }
    }as any as({new():AccountViewModel})
    return {
        AccountViewModel
    }
})