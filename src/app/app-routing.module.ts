import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { NotFoundComponent } from "./shared/notfound/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: 'rooms', loadChildren: () => import('./room/room.module').then((m) => m.RoomModule)},
  {path: 'search', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
