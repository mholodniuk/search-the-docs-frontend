import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { RoomListComponent } from './components/room-list/room-list.component';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { StoreModule } from "@ngrx/store";
import { RoomReducer } from "./store/room.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RoomEffects } from "./store/room.effects";
import { RouterLink } from "@angular/router";
import { RoomComponent } from "./components/room/room.component";
import { RoomRoutingModule } from "./room-routing.module";


@NgModule({
  declarations: [
    RoomListComponent,
    RoomComponent
  ],
  exports: [
    RoomListComponent
  ],
  imports: [
    RouterLink,
    SharedModule,
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    RoomRoutingModule,
    StoreModule.forFeature('room', RoomReducer),
    EffectsModule.forFeature([RoomEffects]),
  ]
})
export class RoomModule {
}
