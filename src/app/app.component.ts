import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { catchError, EMPTY, of, throwError } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token = "";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().pipe(
      catchError(() => {
        return throwError(() => of(EMPTY))
      })
    ).subscribe((users) => {
      console.log(users);
    })
  }
}
