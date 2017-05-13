import { Routes } from "@angular/router";
import { SignInComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo:'signup', pathMatch: 'full'}
];