import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './notfound/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SnackbarEffects } from "./snackbar/store/snackbar.effects";
import { SnackbarReducer } from "./snackbar/store/snackbar.reducer";
import { MatSnackBarModule } from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forFeature('snackbar', SnackbarReducer),
    EffectsModule.forFeature([SnackbarEffects]),
  ]
})
export class SharedModule {
}
