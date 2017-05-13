import { Message } from "./message.model";

export class MessageService {
  private messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(message);
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  getMessages() {
    return this.messages;
  }
}