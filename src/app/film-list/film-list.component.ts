import { Component, OnInit, Input } from '@angular/core';

import { FilmService, IFilm } from "../film.service";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() animateHeader: boolean = false;
  @Input() animateTable: boolean = false;
  films: IFilm[] = null;;

  /**
   * Creates a new instance
   * @param filmService {FilmService} - Injected reference to the film service
   */
  constructor(private filmService: FilmService) { }

  /**
   * Initializes the component
   */
  ngOnInit(): void {
    this.filmService.getFilmsAsync().then(
      (films: IFilm[]) => {
        this.showFilms(films);
      }
    )
  }

  /** 
   * Displays the film list
   * @param filmData {IFilm[]} - The films to display
   */
  private showFilms(filmData: IFilm[]): void {
    if (this.animateTable) {
      // Animate the entry of films
      this.films = [];
      let iFilmIndex: number = 0;
      let iIntervalId: number = setInterval(() => {
          this.films.push(filmData[iFilmIndex]);
          iFilmIndex++;
          if (iFilmIndex >= filmData.length) {
            clearInterval(iIntervalId);
          }
      }, 200);

    } else {
      // Show all of the films right away
      this.films = filmData;
    }
  }
}