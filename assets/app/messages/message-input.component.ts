import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
})
export class MessageInputComponent implements OnInit{
   message: Message;

  constructor(private messageService: MessageService) { }


  ngOnInit(): void {
    this.messageService.evtMessageIsEdit.subscribe((message: Message) => this.message = message);
  }
  
  onClear(form: NgForm) {
    this.message = null;
    form.reset();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (this.message) {
      this.message.content = form.value.content;

    } else {
      var message = new Message(form.value.content, 'eyesice');
      this.messageService.addMessage(message)
      .subscribe(data => console.log(data),
      error => console.error(error));
    }
    form.reset();
  }
}