import { Question } from 'serenity-js/lib/screenplay-protractor';
import {TodoList} from '../components/todo_list';
import {Text} from "../../text";
// import {TodoListItems} from "../../../staging/transpiled/screenPlay/questions/todo_List_items";


export class TodoListItems {

    static Displayed: Question<string>= Text.of(TodoList.error_message_displayed);


}