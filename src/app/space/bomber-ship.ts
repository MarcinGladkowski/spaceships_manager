import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {

    constructor(pilot?:Pilot) {
        super('Falcon Heavy', '/assets/falcon_heavy.png', pilot);
    }

}
