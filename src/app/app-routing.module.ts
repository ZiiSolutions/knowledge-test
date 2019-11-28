import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadStartAndEndComponent } from './road-start-and-end/road-start-and-end.component';

const routes: Routes = [{ path: '', component: RoadStartAndEndComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
