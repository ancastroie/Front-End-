import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login-component/login.component";
import {TestComponent} from "./test_component/test.component";
import {QuestionsComponent} from "./questions/questions.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'test', component:TestComponent},
  {path:'questions', component:QuestionsComponent},
  { path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
