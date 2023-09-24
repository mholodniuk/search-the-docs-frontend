import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtTokenInterceptor } from "./token-interceptor/jwt-token-interceptor";
import { AuthService } from "./service/auth-service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth.effects";
import { AuthReducer } from "./store/auth.reducer";
import { AuthComponent } from "./components/auth.component";
import { LoginComponent } from "./components/login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    CommonModule,
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
