import { createAction, props } from '@ngrx/store';

export class WeatherActions {

  static readonly LOAD_WEATHER_FEED = createAction(
    '[Forecast] Load weather feed', props<{ city: string }>()
  );

  static readonly LOAD_WEATHER_FEED_SUCESS = createAction(
    '[Forecast] Load weather feed success', props<{ data: any }>()
  );

  static readonly LOAD_WEATHER_FEED_FAILURE = createAction(
    '[Forecast] Load weather feed failure', props<{ error: any }>()
  );
}
