import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from './root-container.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from '@angular/material/badge';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { SharedModule } from "../shared/shared.module";
import { MatMenuModule } from "@angular/material/menu";
import { RoomModule } from "../room/room.module";


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
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    RoomModule
  ]
})
export class RootModule {
}
