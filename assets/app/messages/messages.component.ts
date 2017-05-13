import { Component } from "@angular/core";
import { MessageService } from "./message.service";

@Component({
  selector: 'app-messages',
  template: `
    <div class="row">
      <app-message-input></app-message-input>
      <hr>
      <app-message-list></app-message-list>
    </div>
   `,
    providers: [MessageService]
})
export class MessagesComponent {

}