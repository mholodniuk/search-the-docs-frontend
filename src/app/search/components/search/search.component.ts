import { Component } from '@angular/core';
import { AppState } from "../../../store/app.state";
import { Store } from "@ngrx/store";
import * as SearchActions from "../../store/search.actions";
import { FilterOptions } from "../../store/search.state";
import { FormBuilder, Validators } from "@angular/forms";
import * as SnackbarActions from "../../../shared/snackbar/store/snackbar.actions";
import { ERROR } from "../../../shared/snackbar/snackbar.config";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  form = this.fb.group({
    phrase: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
    room: '',
    user: '',
    size: [50, Validators.compose([Validators.required, Validators.min(1), Validators.max(200)])],
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder) {
  }

  search() {
    this.warnIfInvalid();
    const filters: FilterOptions = {
      phrase: this.form.controls.phrase.value!,
      room: this.form.controls.room.value!,
      user: this.form.controls.user.value!
    }
    this.store.dispatch(SearchActions.changeFilters(filters));
  }

  warnIfInvalid() {
    if (this.form.valid) return;
    const config = {
      message: `Phrase must be longer than 3 words and shorter than 100`,
      action: 'Close',
      config: ERROR
    };
    this.store.dispatch(SnackbarActions.openSnackbar({config: config}));
  }

  clear() {
    this.form.reset();
    this.store.dispatch(SearchActions.clearHits())
  }
}
