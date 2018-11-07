export abstract class SpaceShip {

    modelName: string;
    imageUrl: string;
    health = 100;
    activeShields = true;
    activeWeapons = true;

    constructor(modelName, imageUrl) {
        this.modelName = modelName;
        this.imageUrl = imageUrl;
    }

}


