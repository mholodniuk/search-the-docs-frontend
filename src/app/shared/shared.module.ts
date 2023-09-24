import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './notfound/not-found.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule {
}
