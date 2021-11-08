import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  submitted = false;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username : '',
    email : '',
    secretQuestion : '', 
    answer : '', 
    gender : ''
  }


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData : {
        username : suggestedName
      }
    });
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  //We could use the ViewChild to get the local reference of the form straight here
  onSubmit(){
    
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();

  }
}
