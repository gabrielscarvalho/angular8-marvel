import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsModule } from '../features/comics/comics.module';
import { NavigationModule } from '@app/shared/components/navigation/navigation.module';
import { ToolbarModule } from '@app/shared/components/toolbar/toolbar.module';
import { LoadingModule } from '@app/shared/components/loading/loading.module';
import { LoadingService } from '@app/shared/components/loading/services/loading.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    ComicsModule,
    ToolbarModule,
    LoadingModule
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
