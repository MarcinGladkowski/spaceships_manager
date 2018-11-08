import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceImageDirective } from './space-image.directive';
import { TickizePipe } from './tickize.pipe';


@NgModule({
  declarations: [SpaceImageDirective, TickizePipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    SpaceImageDirective,
    TickizePipe
  ]
})
export class SharedModule { }
