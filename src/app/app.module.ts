import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputService} from './input.service';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
