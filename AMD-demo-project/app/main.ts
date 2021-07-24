
require.config({
    paths:{
       ko:"../libs/knockout/knockout-latest",
       accViewModel:"./viewModel/AccountViewModel",
       acc:"./model/Account",
    }
})

define(["ko","accViewModel"],function(ko:KnockoutStatic,accVM:AccVM){
    const {AccountViewModel} = accVM
    ko.applyBindings(new AccountViewModel())
})