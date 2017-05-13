import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, 
      [Validators.required, 
      Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
      password: new FormControl(null, Validators.required),      
    });
  }

  form: FormGroup;

  onSignIn() {
    console.log(this.form);
  }

}
