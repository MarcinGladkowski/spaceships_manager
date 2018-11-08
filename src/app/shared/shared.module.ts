import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceImageDirective } from './space-image.directive';


@NgModule({
  declarations: [SpaceImageDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    SpaceImageDirective
  ]
})
export class SharedModule { }
