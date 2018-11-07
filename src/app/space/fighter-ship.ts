import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {

    constructor(pilot?: Pilot) {
        super('Falcon 9', '/assets/falcon_9.png', pilot);
    }

}
