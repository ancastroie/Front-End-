import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() {

  }
  signup(username: string, email: string, password: string) {
    // Here, you can implement your sign-up logic
    console.log("Sign Up button clicked");

    // Example of accessing form values and printing them
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // After accessing form values, you can send them to a backend service for sign-up
  }
  ngOnInit(): void {
  }

}
