import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ForecastFeatureState, FORECAST_FEATURE_STATE } from "../reducers";

const featureSelector = createFeatureSelector<ForecastFeatureState>(FORECAST_FEATURE_STATE);

const featureState = createSelector(
    featureSelector,
    state => state.weatherForecastState
);



export class ForecastSelectors {
    static readonly data = createSelector(
        featureState,
        state => state.data
    );

    static readonly error = createSelector(
        featureState,
        state => state.error
    );
}

