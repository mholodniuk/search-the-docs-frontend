import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtTokenInterceptor } from "./token-interceptor/jwt-token-interceptor";
import { AuthService } from "./service/auth-service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/user.effects";
import { UserReducer } from "./store/user.reducer";
import { AuthComponent } from "./components/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', UserReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
})
export class AuthModule {
}
