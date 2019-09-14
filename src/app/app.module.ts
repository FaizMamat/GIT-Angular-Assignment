import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondpagesComponent } from './secondpages/secondpages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SecondpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
