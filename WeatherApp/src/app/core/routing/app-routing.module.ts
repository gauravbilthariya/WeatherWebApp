/****************************
Copyright © 2021-present Boeing. All rights reserved.
****************************/

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingComponent } from '../landing-pane/app-landing.component';

export const routingDefaults = Object.freeze({
  forecastPath: 'forecastView'
});

const routes: Routes = [
  {
    path: '',
    component: AppLandingComponent,
    children: [
      {
        path: '',
        redirectTo: routingDefaults.forecastPath,
        pathMatch: 'full'
      },
      {
        path: `home`,
        redirectTo: routingDefaults.forecastPath,
        pathMatch: 'full'
      },
      {
        path: routingDefaults.forecastPath,
        loadChildren: () => import('../../forecast/forecast.module').then(m => m.ForecastModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
