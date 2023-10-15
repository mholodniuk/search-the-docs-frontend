import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DocumentComponent } from './components/document/document.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { DocumentReducer } from "./store/document.reducer";
import { DocumentEffects } from "./store/document.effects";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../ui/material.module";
import { DocumentDetailsDialogComponent } from './components/document-details/document-details-dialog.component';
import { DocumentTagsDialogComponent } from './components/document-tags/document-tags-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    DocumentComponent,
    DocumentDetailsDialogComponent,
    DocumentTagsDialogComponent
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
    NgOptimizedImage,
    ReactiveFormsModule,
  ]
})
export class DocumentModule { }
