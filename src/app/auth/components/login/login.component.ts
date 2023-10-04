import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoginEvent } from "./login.types";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import * as AuthActions from '../../store/user.actions';
import { map, Observable, startWith, switchMap } from "rxjs";
import { errorSelector } from "../../store/user.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error$: Observable<string | undefined>;
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.error$ = this.store.pipe(
      select(errorSelector),
      switchMap((error) => {
        return this.form.valueChanges.pipe(
          map(() => undefined),
          startWith(error),
        )
      })
    );
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(AuthActions.loadAuthToken(this.form.value as LoginEvent))
    }
  }
}
