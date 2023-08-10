import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './user-login/user-login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResearchBookComponent } from './research-book/research-book.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'user-login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'research-book' , component: ResearchBookComponent},
  // Add other routes as needed.
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

