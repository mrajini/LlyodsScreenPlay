Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_1 = require("../components/todo_list");
var text_1 = require("../../text");
var TodoListItems = (function () {
    function TodoListItems() {
    }
    return TodoListItems;
}());
TodoListItems.Displayed = text_1.Text.of(todo_list_1.TodoList.error_message_displayed);
exports.TodoListItems = TodoListItems;