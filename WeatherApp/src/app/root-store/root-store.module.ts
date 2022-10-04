import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot([])
    ]
  })
  export class AppRootStoreModule {}
  