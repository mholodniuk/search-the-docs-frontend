import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { RoomListComponent } from './components/room-list/room-list.component';
import { StoreModule } from "@ngrx/store";
import { RoomReducer } from "./store/room.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RoomEffects } from "./store/room.effects";
import { RouterLink } from "@angular/router";
import { RoomViewComponent } from "./components/room/room-view.component";
import { RoomRoutingModule } from "./room-routing.module";
import { CreateRoomDialogComponent } from './components/create-room/create-room-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ShareRoomDialogComponent } from './components/share-room/share-room-dialog.component';
import { DocumentModule } from "../document/document.module";
import { MaterialModule } from "../ui/material.module";
import { RoomAccessListDialogComponent } from './components/room-access-list/room-access-list.component';


@NgModule({
  declarations: [
    RoomListComponent,
    RoomViewComponent,
    CreateRoomDialogComponent,
    ShareRoomDialogComponent,
    RoomAccessListDialogComponent
  ],
  exports: [
    RoomListComponent
  ],
  imports: [
    RouterLink,
    SharedModule,
    CommonModule,
    MaterialModule,
    RoomRoutingModule,
    ReactiveFormsModule,
    DocumentModule,
    StoreModule.forFeature('room', RoomReducer),
    EffectsModule.forFeature([RoomEffects]),
  ]
})
export class RoomModule {
}
