import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { P44APIService } from './p44-api.service';
import { UrllinkComponent } from './urllink/urllink.component';

@NgModule({
  declarations: [
    AppComponent,
    UrllinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [P44APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
