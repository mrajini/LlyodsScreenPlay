import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class TypeInfo implements Task {
    private actorEmail;
    static called(actorEmail: string): TypeInfo;
    performAs(actor: PerformsTasks): PromiseLike<void>;
    constructor(actorEmail: string);
}
