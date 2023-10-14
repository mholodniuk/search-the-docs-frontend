import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { DocumentReducer } from "./store/document.reducer";
import { DocumentEffects } from "./store/document.effects";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../material/material.module";



@NgModule({
  declarations: [
    DocumentComponent
  ],
  exports: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature('document', DocumentReducer),
    EffectsModule.forFeature([DocumentEffects]),
  ]
})
export class DocumentModule { }
