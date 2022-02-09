import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirm_password: ['']
    });
  }

  ngOnInit(): void {
  }

}
