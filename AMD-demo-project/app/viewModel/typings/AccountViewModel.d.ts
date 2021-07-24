interface AccountViewModel{
    Accounts:KnockoutObservableArray<Account>
    HandleClick():void;
    NewName:KnockoutObservable<string>;
    NewBalance:KnockoutObservable<number>;
}