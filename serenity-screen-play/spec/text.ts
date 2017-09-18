/**
 * Converts a string containing a comma-separated list of values
 * to a list of values
 *
 * @param commaSeparatedValues
 * @return {string[]}
 */

import {BrowseTheWeb, Target} from "serenity-js/lib/serenity-protractor";
import { Question, UsesAbilities } from '@serenity-js/core/lib/screenplay';

export class Text {
    static of    = (element: Target): Question<PromiseLike<string>> => new TextOf(element);
    static ofAll = (elements: Target): Question<PromiseLike<string[]>> => new TextOfAll(elements);
}

class TextOf implements Question<PromiseLike<string>> {

    answeredBy(actor: UsesAbilities): PromiseLike<string> {
        return BrowseTheWeb.as(actor).locate(this.target).getText();
    }

    constructor(private target: Target) {
    }

    toString = () => `the text of ${ this.target}`;
}

class TextOfAll implements Question<PromiseLike<string[]>> {

    answeredBy(actor: UsesAbilities): PromiseLike<string[]> {
        // protractor ignores type definitions for the ElementArrayFinder
        // https://github.com/angular/protractor/blob/c3978ec166760ac07db01e700c4aaaa19d9b5c38/lib/element.ts#L92
        return BrowseTheWeb.as(actor).locateAll(this.target).getText() as any;
    }

    constructor(private target: Target) {
    }

    toString = () => `the text of all ${ this.target}`;
}
