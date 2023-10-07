import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from './root-container.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from '@angular/material/badge';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "../shared/shared.module";
import { MatMenuModule } from "@angular/material/menu";
import { RoomModule } from "../room/room.module";
import { MatTooltipModule } from "@angular/material/tooltip";


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
    RoomModule,
    MatTooltipModule
  ]
})
export class RootModule {
}
