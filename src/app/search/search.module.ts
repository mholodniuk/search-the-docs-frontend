import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./components/search/search.component";
import { SearchRoutingModule } from "./search-routing.module";
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../ui/material.module";



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
