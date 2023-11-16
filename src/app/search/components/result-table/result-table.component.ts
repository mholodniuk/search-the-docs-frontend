import { Component, OnInit } from '@angular/core';
import { Hit } from "../../../document/model/document.model";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { filteredHitsSelector } from "../../store/search.selector";
import { animate, state, style, transition, trigger } from "@angular/animations";


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
  resultsLength = 1;
  isLoadingResults = false;
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
    this.store.pipe(select(filteredHitsSelector)).subscribe(hits => this.data = hits);
  }
}
