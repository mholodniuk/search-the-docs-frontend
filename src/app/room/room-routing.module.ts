import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from "./components/room/room.component";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    children: [
      {
        path: ':id',
        component: RoomComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {
}
