import { Component, OnInit } from '@angular/core';
import { Artwork } from '../models/artwork'
import { ArtworkPosition } from '../models/artwork-position';
import { Person } from '../models/Person';
import { Position } from '../models/position-enum';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movies:Artwork[] = [ 
  new Artwork(
    1, 
    'Back to the future', 
    new Date(1985, 1, 1), 
    [ 
      new ArtworkPosition(
        1,
        new Person(1, "Robert", "Zemeckis", new Date(1952, 5, 14), "Américaine"),
        Position.Director),
      new ArtworkPosition(
        1,
        new Person(2, "Michael", "J. Fox", new Date(1961, 6, 9), "Américaine"),
        Position.Actor),
      new ArtworkPosition(
        3,
        new Person(3, "Bob", "Gale", new Date(1951 , 5, 25), "Américaine"),
        Position.Actor)
    ]),
    new Artwork(2, 'Gladiator', new Date(2000, 6, 20), 
    [ 
      new ArtworkPosition(
        4,
        new Person(4, "Ridley", "Scott", new Date(1937, 11, 30), "Américaine"),
        Position.Director),
      new ArtworkPosition(
        5,
        new Person(5, "Russell", "Crowe", new Date(1964, 4, 7), "Néo-zélandais"),
        Position.Actor),
      new ArtworkPosition(
        6,
        new Person(6, "Michael", "J. Fox", new Date(1961, 6, 9), "Américaine"),
        Position.Actor)
    ]),
  new Artwork(3, `Maman j'ai raté l'avion`, new Date(1985, 1, 1),
  [
    new ArtworkPosition(
      6,
      new Person(6, "Macaulay", "Culkin", new Date(1980, 8, 26), "Américaine"),
      Position.Actor)
  ])
];

  constructor() { }

  ngOnInit() {
  }

}
