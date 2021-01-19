import { PasswordValidation } from './password.validator';
import { UserNameValidation } from './username.validators';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signInForm = new FormGroup({
    username : new FormControl('username',[
      Validators.required,
      Validators.minLength(3),
      UserNameValidation.cannotContainSpace,
      Validators.pattern(".{8,}"),
    ],UserNameValidation.uniqNameValidation),
    password : new FormControl('password', [
      Validators.required,
      PasswordValidation.minimmumLength,
      PasswordValidation.capitalLetter,
      PasswordValidation.oneNumeberAtLeast,
      PasswordValidation.oneSpecialcharacterAtleast,
    
    ])
  });
  get username() {
    return this.signInForm.get('username');
  }
  get password() {
    // console.log(this.signInForm);
    return this.signInForm.get('password');
  }

  login() {
    // const {username, password} = this.signInForm.value
    // if(username === "giridharreddy" && password ==="Katasani@98") {
    //   console.log("hekl")
      this.signInForm.setErrors({
        invalidLogin: true
      });
  }
  
}
