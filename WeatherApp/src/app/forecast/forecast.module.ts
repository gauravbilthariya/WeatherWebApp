import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './components/forecast/forecast.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FORECAST_FEATURE_STATE, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ForecastEffects } from './store/effects/forecast.effects';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ForecastComponent,
  }
];

@NgModule({
  declarations: [
    ForecastComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FORECAST_FEATURE_STATE, reducers),
    EffectsModule.forFeature([ForecastEffects])
  ],
  exports: [ForecastComponent]
})
export class ForecastModule { }
