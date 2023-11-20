import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Hit } from "../../../document/model/document.model";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { filteredHitsSelector, loadingSelector } from "../../store/search.selector";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Observable } from "rxjs";
import { MatListItem } from "@angular/material/list";


@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ResultTableComponent implements OnInit {
  displayedColumns = ['documentName', 'user', 'room', 'page', 'count'];
  resultsLength = 0;
  isLoading$: Observable<boolean>;
  data: Hit[];
  expandedElement: Hit;

  translations = new Map([
    ["documentName", "Document"],
    ["room", "Room"],
    ["page", "Page"],
    ["count", "Occurrences"],
    ["user", "Owner"]
  ]);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(loadingSelector));
    this.store.pipe(select(filteredHitsSelector)).subscribe(hits => {
      this.data = hits;
      this.resultsLength = hits.length;
    });
  }

  onElementSelected(element: any): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
