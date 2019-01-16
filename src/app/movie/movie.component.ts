import { Component, OnInit } from '@angular/core';
import { Artwork } from '../models/artwork'
import { ArtworkPosition } from '../models/artwork-position';
import { Person } from '../models/Person';
import { Position } from '../models/position-enum';
import { Injectable } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Artwork[];
  clickedMovie: Artwork;

  getDetails(artwork:Artwork)
  {
    console.log(`Movie clicked : ${artwork.title}`);
    this.clickedMovie = artwork;
  }

  constructor(private movieService: MovieService) { 

  }

  ngOnInit() {
   this.movies = this.movieService.getMovies();
  }
}

