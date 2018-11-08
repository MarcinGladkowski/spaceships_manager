import { PilotAttrs } from './pilot-attrs';

export class Pilot implements PilotAttrs {

    static defaultImageUrl = '/assets/astronaut.png';

    id: number;
    firstName: string;
    lastName: string;
    imageUrl: string;

    constructor(attrs: Partial<PilotAttrs> = {}) {
        this.id = attrs.id;
        this.firstName = attrs.firstName;
        this.lastName = attrs.lastName;
        this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
        this.fullName = `${attrs.firstName} ${attrs.lastName}`;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value: string) {
        const values = value.split(' ');
        [this.firstName, this.lastName] = values;
    }
}
