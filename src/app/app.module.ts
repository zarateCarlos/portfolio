import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { ComponetsComponent } from './componets/componets.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponetsComponent,
    LogoAPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
