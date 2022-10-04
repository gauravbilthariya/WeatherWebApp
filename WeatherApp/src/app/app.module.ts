import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRootStoreModule } from './root-store/root-store.module';
import { AppLandingComponent } from './core/landing-pane/app-landing.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './core/routing/app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './core/base-component/base.component';
@NgModule({
  declarations: [
    AppComponent,
    AppLandingComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    AppRootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
