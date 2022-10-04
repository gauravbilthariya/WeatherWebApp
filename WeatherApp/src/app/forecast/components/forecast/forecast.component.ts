import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/core/base-component/base.component';
import { ForecastViewModel } from '../../models/forecast.model';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent extends BaseComponent implements OnInit {

  error$: Observable<string> = this.forecastService.error$();
  cityFormControl = new FormControl();
  model: ForecastViewModel = {} as ForecastViewModel;
  loading: boolean = true;
  private sort: 'asc' |'desc' = 'asc';

  get forecastDates() {
    const dates =  Object.keys(this.model.fiveDayForeCast);
    if(this.sort === 'desc') {
      dates.reverse();
    }
    
    return dates;
  }

  constructor(private readonly forecastService: ForecastService) {
    super();
  }

  ngOnInit(): void {
    this.forecastService.data$().pipe(
      takeUntil(this.destroyed$)
    )
      .subscribe((model: any) => {
        this.model = model;
        this.loading = false;
      })
  }

  serachClick(): void {
    this.forecastService.loadWeatherFeedForCity(this.cityFormControl.value)
  }

  sortClick(): void {
   this.sort= this.sort === 'asc' ? 'desc' : 'asc';
  }
}
