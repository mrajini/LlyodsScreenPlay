import { Question } from 'serenity-js/lib/screenplay-protractor';
import {TodoList} from '../components/todo_list';
import {Text} from "../../text";


export class TodoListItems {


    static errorDisplayedForLogin = Text.of(TodoList.error_message_displayed_for_login);
    static errorDisplayedForRegistration = Text.of(TodoList.error_message_for_registration);
    static messageDisplayedOnLogOnPage = Text.of(TodoList.Log_on_page_title);
    static messageDisplayedForFailedRegister = Text.of(TodoList.security_reasons_text);

}