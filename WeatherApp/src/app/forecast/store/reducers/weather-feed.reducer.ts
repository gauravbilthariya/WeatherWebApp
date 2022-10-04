import { Action, createReducer, on } from '@ngrx/store';
import { WeatherActions } from '../actions/weather-feed.actions';

export interface IWeatherFeedState {
    loading: boolean;
    data: any;
    error: any;
}

export const weatherFeedInitialState: IWeatherFeedState = {
    loading: false,
    data: null,
    error: null
};

const reducer = createReducer<IWeatherFeedState>(
    weatherFeedInitialState,
    on(WeatherActions.LOAD_WEATHER_FEED, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(WeatherActions.LOAD_WEATHER_FEED_SUCESS, (state, { data }) => ({
        ...state,
        data: data,
        error: null,
        loading: false
    })),
    on(WeatherActions.LOAD_WEATHER_FEED_FAILURE, (state, { error }) => ({
        ...state,
        error: error
    }))
);


export function weatherFeedReducer(state: IWeatherFeedState | undefined, action: Action): IWeatherFeedState {
    return reducer(state, action);
}
