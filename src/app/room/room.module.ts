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
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRoomDialogComponent } from './components/create-room-dialog/create-room-dialog.component';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from '@angular/material/grid-list';
import { ShareRoomDialogComponent } from './components/share-room-dialog/share-room-dialog.component';
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { DocumentModule } from "../document/document.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    RoomListComponent,
    RoomComponent,
    CreateRoomDialogComponent,
    ShareRoomDialogComponent
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
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        StoreModule.forFeature('room', RoomReducer),
        EffectsModule.forFeature([RoomEffects]),
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatGridListModule,
        MatNativeDateModule,
        DocumentModule,
        MatProgressSpinnerModule
    ]
})
export class RoomModule {
}
