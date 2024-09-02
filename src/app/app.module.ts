import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthinterceptorService } from './security/authinterceptor.service';
import { UiModule } from './ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { viewDefaulterReducer } from './redux/viewdefaulters.reducer';
import { searchDefaulterReducer } from './redux/defaulters/searchdefaulters.reducer';
import { pageDefaulterReducer } from './redux/defaulters/pagedefaulters.reducer';
import { viewRevenueReducer } from './redux/viewrevenue.reducer';
import { searchRevenueReducer } from './redux/revenue/searchrevenue.reducer';
import { pageRevenueReducer } from './redux/revenue/pagerevenue.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    StoreModule.forRoot({
      pagedefaulters : pageDefaulterReducer,
      searchdefaulters : searchDefaulterReducer,
      viewdefaulters : viewDefaulterReducer,
      pagerevenue : pageRevenueReducer,
      searchrevenue : searchRevenueReducer,
      viewrevenue : viewRevenueReducer
    }, {})
  ],
  exports:[
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
