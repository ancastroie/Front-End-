import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstangapp';
  name = 'No name'

  setUsername(username:any){
    this.name = username;
  }
}
