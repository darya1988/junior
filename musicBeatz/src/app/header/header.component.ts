import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // imgHeader = 'http://localhost:4200/assets/header.jpeg';
  mLogin = false;
  mRegistration = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  modalLogin() {
    this.mLogin = true;
    this.mRegistration = false;
  }

  modalRegistration() {
    this.mRegistration = true;
    this.mLogin = false;
  }

  closeLogin() {
    this.mLogin = false;
  }

  closeRegistration() {
    this.mRegistration = false;
  }

  login(form) {
    console.log(form);
    if (form.valid) {
      const data = form.value;
    }
  }

  registration() {
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['',  [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    });
  }

}
