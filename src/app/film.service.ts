import { Injectable } from '@angular/core';

/**
 * Represents a single film
 */
export interface IFilm {
  name: string,
  release: Date,
  gross: number,
  metacritic: number,
  phase: number
}

/**
 * The full film list
 */
const FILM_DATA: IFilm[] = [
  { name: "Iron Man", release: new Date(2008, 4, 2), gross: 318412101, metacritic: 79, phase: 1 },
  { name: "The Incredible Hulk", release: new Date(2008, 6, 13), gross: 134806913, metacritic: 61, phase: 1 },
  { name: "Iron Man 2", release: new Date(2010, 4, 7), gross: 312433331, metacritic: 57, phase: 1 },
  { name: "Thor", release: new Date(2011, 4, 6), gross: 181030624, metacritic: 57, phase: 1 },
  { name: "Captain America: The First Avenger", release: new Date(2011, 6, 22), gross: 176654505, metacritic: 67, phase: 1 },
  { name: "Marvel's The Avengers", release: new Date(2012, 4, 4), gross: 623357910, metacritic: 69, phase: 1 },
  { name: "Iron Man 3", release: new Date(2013, 4, 3), gross: 409013994, metacritic: 62, phase: 2 },
  { name: "Thor: The Dark World", release: new Date(2013, 10, 8), gross: 206362140, metacritic: 54, phase: 2 },
  { name: "Captain America: The Winter Soldier", release: new Date(2014, 3, 4), gross: 259766572, metacritic: 70, phase: 2 },
  { name: "Guardians of the Galaxy", release: new Date(2014, 7, 1), gross: 333176600, metacritic: 76, phase: 2 },
  { name: "Avengers: Age of Ultron", release: new Date(2015, 4, 1), gross: 459005868, metacritic: 66, phase: 2 },
  { name: "Ant-Man", release: new Date(2015, 6, 17), gross: 180202163, metacritic: 64, phase: 2 },
  { name: "Captain America: Civil War", release: new Date(2016, 4, 16), gross: 408084349, metacritic: 75, phase: 3 },
  { name: "Doctor Strange", release: new Date(2016, 10, 4), gross: 232641920, metacritic: 72, phase: 3 },
  { name: "Guardians of the Galaxy Vol. 2", release: new Date(2017, 4, 5), gross: 389813101, metacritic: 67, phase: 3 },
  { name: "Spider-Man: Homecoming", release: new Date(2017, 6, 7), gross: 333125680, metacritic: 73, phase: 3 },
];

/**
 * A service for working with film data
 */
@Injectable()
export class FilmService {

  /**
   * Loads the film list
   * @returs {Promise<IFilm[]>} - A Promise that resolves when the films have been loaded
   */
  getFilmsAsync(): Promise<IFilm[]> {
    return Promise.resolve(FILM_DATA);
  }

}
