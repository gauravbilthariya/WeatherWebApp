import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { WeatherActions } from '../actions/weather-feed.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class ForecastEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) { }

  loadWeatherFeed = createEffect(() => this.actions$
    .pipe(
      ofType(WeatherActions.LOAD_WEATHER_FEED),
      switchMap(({ city }) => {
        return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=056e49fff4d1cf01b1058f9986a00ad0`)
          .pipe(
            map(result => WeatherActions.LOAD_WEATHER_FEED_SUCESS({ data: result })),
            catchError(response => of(WeatherActions.LOAD_WEATHER_FEED_FAILURE({ error: response.error.message })))
          )
      })
    )
  );
}