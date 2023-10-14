import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { DocumentReducer } from "./store/document.reducer";
import { DocumentEffects } from "./store/document.effects";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";



@NgModule({
  declarations: [
    DocumentComponent
  ],
  exports: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    StoreModule.forFeature('document', DocumentReducer),
    EffectsModule.forFeature([DocumentEffects]),
    MatIconModule,
    MatTooltipModule,
  ]
})
export class DocumentModule { }
