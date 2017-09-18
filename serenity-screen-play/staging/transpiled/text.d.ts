/**
 * Converts a string containing a comma-separated list of values
 * to a list of values
 *
 * @param commaSeparatedValues
 * @return {string[]}
 */
import { Target } from "serenity-js/lib/serenity-protractor";
import { Question } from '@serenity-js/core/lib/screenplay';
export declare class Text {
    static of: (element: Target) => Question<PromiseLike<string>>;
    static ofAll: (elements: Target) => Question<PromiseLike<string[]>>;
}
