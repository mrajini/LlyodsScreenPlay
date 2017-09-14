import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class AddATodoItem implements Task {
    private itemName;
    static called(itemName: string): AddATodoItem;
    performAs(actor: PerformsTasks): PromiseLike<void>;
    constructor(itemName: string);
}
