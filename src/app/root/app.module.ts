import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsModule } from '../features/comics/comics.module';
import { NavigationModule } from '@app/shared/components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    ComicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
