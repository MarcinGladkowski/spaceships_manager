import { Component, Input} from '@angular/core';
import { Pilot } from '../space/pilot';

@Component({
    selector: 'app-pilot',
    template: 'pilot {{pilot.firstName}} <ng-content></ng-content>'
})

class PilotMockComponent {
    @Input() pilot: Pilot;
}
