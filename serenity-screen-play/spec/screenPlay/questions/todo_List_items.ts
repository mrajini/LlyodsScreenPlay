import { Question } from 'serenity-js/lib/screenplay-protractor';
import {TodoList} from '../components/todo_list';
import {Text} from "../../text";


export class TodoListItems {


    static errorDisplayedForLogin = Text.of(TodoList.error_message_displayed_for_login);
    static errorDisplayedForRegistration = Text.of(TodoList.error_message_for_registration);
}