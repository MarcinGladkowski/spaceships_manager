import { PilotFormComponent } from './pilot-form/pilot-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar/hangar.component';
import { PilotResolver } from './pilot.resolver';

const routes: Routes = [
  {path: '', component: HangarComponent, pathMatch: 'full'},
  {path: 'pilots/:id', component: PilotFormComponent, resolve: {pilot: PilotResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
