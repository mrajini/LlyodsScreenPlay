import { Target } from 'serenity-js/lib/screenplay-protractor';
import { Question } from "serenity-js/lib/screenplay";
export declare class TodoList {
    static What_Needs_To_Be_Done: Target;
    static Items: Target;
    static Items_Displayed: Question<PromiseLike<string[]>>;
}
