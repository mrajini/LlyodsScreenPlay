import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class Start implements Task {
    static navigateToPage(): Start;
    performAs(actor: PerformsTasks): PromiseLike<void>;
}
