import { Question } from 'serenity-js/lib/screenplay-protractor';
import {TodoList} from '../components/todo_list';
import {Text} from "../../text";


export class TodoListItems {


    static errorDisplayed = Text.of(TodoList.error_message_displayed);

}