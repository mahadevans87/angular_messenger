import { Message } from "./message.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  evtMessageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.messages.push(message);
    let body: string = JSON.stringify(message);
    let headers = new Headers({'Content-Type': 'application/json'});
    //let requestOptions = new RequestOptions(headers);
    
    return this.http.post("http://localhost:3000/message", 
      body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));    
  }

  
  private handleError (error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  getMessages() {

    return this.http.get("http://localhost:3000/message")
      .map((response: Response) => {
        const messages = response.json().obj;
        let transformedMessages: Message[] = []
        for (let message of messages) {
          transformedMessages.push(new Message(message.content, "eyesice", message.id));
        }
        this.messages = transformedMessages;
        return this.messages;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.evtMessageIsEdit.emit(message);
  }

}