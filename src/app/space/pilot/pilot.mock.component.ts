import { Pilot } from './../pilot';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pilot',
    template: 'pilot {{pilot.firstName}} <ng-content></ng-content>'
  })
export class PilotMockComponent {
    @Input() pilot: Pilot;
}
