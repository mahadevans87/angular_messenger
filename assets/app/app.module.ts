import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessageService } from "./messages/message.service";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { SignupComponent } from "./auth/signup.component";
import { SignInComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent ,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SignupComponent,
        SignInComponent,
        LogoutComponent    
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}