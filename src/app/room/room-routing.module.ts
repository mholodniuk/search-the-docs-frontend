import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomViewComponent } from "./components/room/room-view.component";

const routes: Routes = [
  {
    path: '',
    component: RoomViewComponent,
    children: [
      {
        path: ':id',
        component: RoomViewComponent,
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
