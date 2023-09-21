import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtTokenInterceptor } from "./token-interceptor/jwt-token-interceptor";
import { AuthService } from "./service/auth-service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth.effects";
import { AuthReducer } from "./store/auth.reducer";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild([{path: '', component: AuthComponent}]),
    SharedModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
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
