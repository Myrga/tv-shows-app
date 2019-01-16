import { Person } from './Person';
import { Position } from './position-enum';


export class ArtworkPosition {
    id: number;
    person: Person;
    position: Position;

    /**
     *
     */
    constructor(id: number, person: Person, position: Position) {
        this.id = id;
        this.person = person;
        this.position = position;
    }
}