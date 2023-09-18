import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    RootComponent
  ],
  exports: [
    RootComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterOutlet,
    MatButtonModule
  ]
})
export class RootModule { }
