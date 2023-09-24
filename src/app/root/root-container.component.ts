import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { User } from "../user/user.model";
import { userSelector } from "../user/store/user.selector";
import { RoomsDto } from "../room.service";

@Component({
  selector: 'root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css']
})
export class RootContainerComponent implements OnInit {
  user$: Observable<User | undefined>;

  mock: RoomsDto = {count: 0, rooms: []};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(userSelector));
  }
}
