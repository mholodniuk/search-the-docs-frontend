import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { RootModule } from "./root/root.module";
import { UserModule } from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    AuthModule,
    RootModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
