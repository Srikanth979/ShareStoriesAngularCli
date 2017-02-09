import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';

import { HttpGlobalService } from "./global/services/http-global.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    JsonpModule
  ],
  providers: [HttpGlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
