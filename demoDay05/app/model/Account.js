

define(["ko"],function(ko){
    const Account = function(Name,Balance){
        this.Name = ko.observable(Name);
        this.Balance = ko.observable(Balance);
    };
    return {
        Account
    }
})