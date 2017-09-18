"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_1 = require("../components/todo_list");
var screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
function getText() {
}
var Messages = (function () {
    function Messages(taskType) {
        this.taskType = taskType;
    }
    Messages.toShowOnly = function (taskType) {
        return new Messages(taskType);
    };
    Messages.prototype.performAs = function (actor) {
        return actor.attemptsTo(
        // getTexT((TodoList.error_message_displayed))
        Messages.toShowOnly(todo_list_1.TodoList.error_message_displayed())
        // Click.on(TodoList.error_message_displayed(this.taskType).getAlertText()
        //    
        );
    };
    return Messages;
}());
__decorate([
    screenplay_protractor_1.step('{0} filters the list to show #taskType items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Messages.prototype, "performAs", null);
exports.Messages = Messages;
//# sourceMappingURL=errorMessages.js.map