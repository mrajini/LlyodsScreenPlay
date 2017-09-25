import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class EnterValues implements Task {
    private Title;
    private FirstName;
    private LastName;
    static called(Title: string, FirstName: string, LastName: string): EnterValues;
    performAs(actor: PerformsTasks): any;
    constructor(Title: string, FirstName: string, LastName: string);
}
