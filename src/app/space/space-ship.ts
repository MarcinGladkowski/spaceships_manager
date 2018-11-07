import { Pilot } from './pilot';

export abstract class SpaceShip {

    modelName: string;
    imageUrl: string;
    health = 100;
    activeShields = true;
    activeWeapons = true;
    pilot: Pilot;

    constructor(modelName, imageUrl, pilot: Pilot = null) {
        this.modelName = modelName;
        this.imageUrl = imageUrl;
        this.pilot = pilot;
    }

}


