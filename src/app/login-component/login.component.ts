import {Component, Input, Output , EventEmitter} from "@angular/core";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login() {
    // Implement your login logic here
    console.log("Login button clicked");
  }

  @Input() testInput: any = 'testInput not set';

  @Output() submitEvent = new EventEmitter<string>();
  username:any = 'initiale unsermane'

  user={username: 'testUsername', password:'test password'}

  user1 = {user: 'ceva', pwd: 'new'}
  sendUsername(){
    console.log("Test")
    // debugger
    this.submitEvent.emit(this.user.username);
  }
}
