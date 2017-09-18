import { PerformsTasks, Task } from 'serenity-js/lib/screenplay-protractor';
export declare class Messages implements Task {
    private taskType;
    static toShowOnly(taskType: string): Messages;
    performAs(actor: PerformsTasks): PromiseLike<void>;
    constructor(taskType: string);
}
