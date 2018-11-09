import { BlackHoleComponent } from './black-hole/black-hole.component';
import { SpaceModule } from './space/space.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'space', loadChildren: () => SpaceModule },
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: 'intel', loadChildren: 'src/app/intel/intel.module#IntelModule'},
  {path: '**', component: BlackHoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
