import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./components/search/search.component";
import { SearchRoutingModule } from "./search-routing.module";
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../ui/material.module";
import { StoreModule } from "@ngrx/store";
import { SearchReducer } from "./store/search.reducer";
import { EffectsModule } from "@ngrx/effects";
import { SearchEffects } from "./store/search.effects";
import { ResultTableComponent } from './components/result-table/result-table.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResultTableComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search', SearchReducer),
    EffectsModule.forFeature([SearchEffects]),
    SearchRoutingModule
  ]
})
export class SearchModule { }
