import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserReducer } from "./store/user.reducer";
import { UserEffects } from "./store/user.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserModule {
}
