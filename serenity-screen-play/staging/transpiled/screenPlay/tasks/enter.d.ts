import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class EnterValues implements Task {
    private Title;
    private FirstName;
    private LastName;
    static called(Title: string, FirstName: string, LastName: string): EnterValues;
    performAs(actor: PerformsTasks): any;
    constructor(Title: string, FirstName: string, LastName: string);
}
export declare class ProvidePostCode implements Task {
    private PostCode;
    static postCodeValue(PostCode: string): ProvidePostCode;
    performAs(actor: PerformsTasks): any;
    constructor(PostCode: string);
}
export declare class AccountDetails implements Task {
    private SortCode;
    private AccountNumber;
    static account_Details(SortCode: string, AccountNumber: string): AccountDetails;
    performAs(actor: PerformsTasks): any;
    constructor(SortCode: string, AccountNumber: string);
}
export declare function randomString(length_: any): string;
export declare class LogOnPageForm implements Task {
    private UserId;
    private Password;
    private ConfirmPassword;
    private Email;
    static fill_log_on_form(UserId: string, Password: string, ConfirmPassword: string, Email: string): LogOnPageForm;
    performAs(actor: PerformsTasks): any;
    constructor(UserId: string, Password: string, ConfirmPassword: string, Email: string);
}
