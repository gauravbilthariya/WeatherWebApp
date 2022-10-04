import { Dictionary } from "lodash";

export interface ForecastViewModel {
  city: string,
  weather: Forecast;
  fiveDayForeCast: Dictionary<Forecast[]>
}

export interface Forecast {
  date: string;
  temp: string;
  wind: string;
  tempFeelsLike: string;
  humidity: string
  tempMax: string;
  tempMin: string;
  time: string
}