import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from './root-container.component';
import { RouterOutlet } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "../shared/shared.module";
import { RoomModule } from "../room/room.module";
import { MaterialModule } from "../ui/material.module";


@NgModule({
  declarations: [
    RootContainerComponent
  ],
  exports: [
    RootContainerComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    SharedModule,
    RoomModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
  ]
})
export class RootModule {
}
