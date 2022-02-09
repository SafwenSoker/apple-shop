import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirm_password: ['']
    });
  }

  ngOnInit(): void {
  }

  signupUser() {
    this.authService.signup(this.signupForm.value).subscribe(res => {
      if(res.status == 201) {
        this.signupForm.reset();
        this.router.navigate(['/auth/login']);
      }
    })
  }


}
