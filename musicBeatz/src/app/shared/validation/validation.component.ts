import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  @Input() control;
  errors = [];
  messages = {
    required: 'this field must not be empty',
    email: 'incorrect email',
    minlength: 'field must contain more than 6 characters',
    maxlength: 'field must contain less than 15 characters',
    incorrectpass: 'wrong login or password'
  };
  constructor() { }

  ngOnInit() {
    this.incorrectData();
  }

  incorrectData(): void {
    this.control.statusChanges
      .subscribe(() => {
        if (this.control.invalid && this.control.dirty && this.control.touched) {
          this.errors = Object.keys(this.control.errors);
          if (this.errors) {
            this.errors = this.errors.map(err => this.messages[err]);
          }
        } else {
          this.errors = [];
        }
      });
  }

}
