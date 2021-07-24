import ko from "knockout";

define([],function(){
    class Accounts{
        Id:KnockoutObservable<string>
        constructor(Id:string){
            this.Id = ko.observable(Id);
        }
    }
    return{
        Accounts
    }
})