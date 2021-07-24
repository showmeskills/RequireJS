"use strict";
require.config({
    paths: {
        "ko": "../libs/knockout/knockout-latest",
        "Account": "./model/Account",
        "AccountViewModel": "./viewModel/AccountViewModel",
    }
});
define(["ko", "Account", "AccountViewModel"], function (ko, Account, AccountViewModel) {
    var account = new Account();
    var accountViewModel = new AccountViewModel(account);
    ko.applyBindings(accountViewModel);
});
