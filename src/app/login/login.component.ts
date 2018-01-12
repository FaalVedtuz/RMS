import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors: String[];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log(this.loginForm);
    // console.log(this.loginForm.valueChanges.subscribe(val => val));
   }

  createForm() {
    this.loginForm = this.fb.group({
      'userid': [
        '', [
          Validators.required,
          Validators.minLength(7)
        ]
      ],
      'password': [
        '',
        Validators.required
      ]
    });
  }
}
