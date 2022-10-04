import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Forecast } from '../models/forecast.model';
import { WeatherActions } from '../store/actions/weather-feed.actions';
import { ForecastSelectors } from '../store/selectors/forecast.selectors';
import { Dictionary, groupBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private readonly store: Store) { }

  loadWeatherFeedForCity(city: string): any {
    this.store.dispatch(WeatherActions.LOAD_WEATHER_FEED({ city: city }))
  }

  error$(): Observable<string> {
    return this.store.select(ForecastSelectors.error);
  }

  data$(): Observable<any> {
    return this.store.select(ForecastSelectors.data).pipe(
      filter(x => !!x),
      map(data => (
        {
          city: data.city.name,
          weather: this.toWeather(data.list[0]),
          fiveDayForeCast: this.fiveDayForeCast(data)
        }
      )))
  }



  private toWeather(weatherData: any): Forecast {
    let datAndTime = weatherData.dt_txt.split(" ")
    const date = datAndTime[0];
    const time = datAndTime[1].split(":")[0] + ":00";
    return {
      date: date,
      time: time,
      humidity: weatherData.main.humidity,
      temp: weatherData.main.temp,
      tempMax: weatherData.main.temp_max,
      tempMin: weatherData.main.temp_min,
      tempFeelsLike: weatherData.main.feels_like,
      wind: weatherData.main.wind
    }
  }

  private fiveDayForeCast(forecastData: any): Dictionary<Forecast[]> {
    let fiveDayForecastData = (forecastData.list as Array<any>).slice(4).map(x => this.toWeather(x))
    return groupBy(fiveDayForecastData, "date");
  }
}
