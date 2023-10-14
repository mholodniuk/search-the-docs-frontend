import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { RootModule } from "./root/root.module";
import { UserModule } from "./user/user.module";
import { RoomModule } from "./room/room.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { IconModule } from "./icon/icon.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    IconModule,
    RoomModule,
    AuthModule,
    RootModule,
    StoreDevtoolsModule.instrument({
      maxAge: 40,
      logOnly: environment.production,
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
