import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ExceptionService } from './exception.service';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
  ],
  providers: [
    DataService,
    [
      {
        provide: ErrorHandler, 
        useClass: ExceptionService
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
