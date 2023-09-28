import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { RoomCollectionComponent } from './components/room-collection/room-collection.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { StoreModule } from "@ngrx/store";
import { RoomReducer } from "./store/room.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RoomEffects } from "./store/room.effects";


@NgModule({
  declarations: [
    RoomCollectionComponent
  ],
  exports: [
    RoomCollectionComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    StoreModule.forFeature('room', RoomReducer),
    EffectsModule.forFeature([RoomEffects]),
  ]
})
export class RoomModule {
}
