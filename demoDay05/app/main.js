
require.config({
    paths: {
        "jquery": "../libs/jquery/jquery.min",
        "ko": "../libs/knockout/knockout-latest",
        "AccountViewModel":"./viewModel/AccountViewModel",
        "durandal":"../libs/durandal/js",
        "plugins":"../libs/durandal/js/plugins",
        'transitions' : '../lib/durandal/js/transitions',
    },
})

define(["ko","jquery","AccountViewModel",], function (ko,$,avm,) {
    const {AccountViewModel} = avm
    ko.applyBindings(new AccountViewModel())

})