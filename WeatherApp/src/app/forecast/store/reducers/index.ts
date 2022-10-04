import { ActionReducerMap } from "@ngrx/store";
import { IWeatherFeedState, weatherFeedReducer } from "./weather-feed.reducer";

export const FORECAST_FEATURE_STATE = 'forecastFeatureState';

export interface ForecastFeatureState {
    weatherForecastState: IWeatherFeedState
}

export const reducers: ActionReducerMap<ForecastFeatureState> = {
    weatherForecastState: weatherFeedReducer,
};