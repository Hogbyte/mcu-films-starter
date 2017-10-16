import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmService } from "./film.service";
import { FilmListComponent } from './film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
