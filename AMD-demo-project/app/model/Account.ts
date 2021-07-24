



define(["ko"], (ko: KnockoutStatic) => {
    const Account = function(this:Account,Name:string,Balance:number) {
        this.Name = ko.observable(Name);
        this.Balance = ko.observable(Balance);
    }as any as({new ():Account})
    return {
        Account
    }
})


