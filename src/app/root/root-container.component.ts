import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { User } from "../user/user.model";
import { RoomsDto } from "../room.service";
import { Router } from "@angular/router";
import * as AuthActions from '../auth/store/user.actions';
import { userSelector } from "../auth/store/user.selector";

@Component({
  selector: 'root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css']
})
export class RootContainerComponent implements OnInit {
  user$: Observable<User | undefined>;
  mock: RoomsDto = {count: 0, rooms: []};

  constructor(
    private store: Store<AppState>,
    private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch(AuthActions.tryAutoAuthenticate());
    this.user$ = this.store.pipe(select(userSelector));
  }

  login() {
    void this.router.navigate(['/auth']);
  }

  home() {
    void this.router.navigate(['/home']);
  }

  logout() {
    this.store.dispatch(AuthActions.logOut());
  }
}
