"use strict";
/**
 * Converts a string containing a comma-separated list of values
 * to a list of values
 *
 * @param commaSeparatedValues
 * @return {string[]}
 */
Object.defineProperty(exports, "__esModule", { value: true });
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var Text = (function () {
    function Text() {
    }
    return Text;
}());
Text.of = function (element) { return new TextOf(element); };
Text.ofAll = function (elements) { return new TextOfAll(elements); };
exports.Text = Text;
var TextOf = (function () {
    function TextOf(target) {
        var _this = this;
        this.target = target;
        this.toString = function () { return "the text of " + _this.target; };
    }
    TextOf.prototype.answeredBy = function (actor) {
        return serenity_protractor_1.BrowseTheWeb.as(actor).locate(this.target).getText();
    };
    return TextOf;
}());
var TextOfAll = (function () {
    function TextOfAll(target) {
        var _this = this;
        this.target = target;
        this.toString = function () { return "the text of all " + _this.target; };
    }
    TextOfAll.prototype.answeredBy = function (actor) {
        // protractor ignores type definitions for the ElementArrayFinder
        // https://github.com/angular/protractor/blob/c3978ec166760ac07db01e700c4aaaa19d9b5c38/lib/element.ts#L92
        return serenity_protractor_1.BrowseTheWeb.as(actor).locateAll(this.target).getText();
    };
    return TextOfAll;
}());
//# sourceMappingURL=text.js.map