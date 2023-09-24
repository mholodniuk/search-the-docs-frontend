import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoginEvent } from "./login.types";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import * as AuthActions from '../../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(AuthActions.retrieveAuthToken(this.form.value as LoginEvent))
    }
  }
}
