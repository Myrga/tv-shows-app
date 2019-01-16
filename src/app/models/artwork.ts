import { ArtworkPosition } from './artwork-position';

export class Artwork {
    id: number;
    title: string;
    releaseDate: Date;

    positions: Array<ArtworkPosition>;

    /**
     *
     */
    constructor(id: number, 
        title: string, 
        releaseDate: Date,
        positions:ArtworkPosition[] = []) {
        this.id = id;
        this.releaseDate = releaseDate;
        this.title = title;
        this.positions = positions;
    }
}