export class Pilot {

    static defaultImageUrl = '/assets/astronaut.png';

    firstName: string;
    lastName: string;
    imageUrl: string;

    constructor(fullName, imageUrl = Pilot.defaultImageUrl) {
        this.fullName = fullName;
        this.imageUrl = imageUrl;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string) {
        const values = value.split(' ');
        this.firstName = values[0];
        this.lastName = values[1];
    }
}
