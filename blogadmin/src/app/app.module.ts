import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { AboutComponent } from './PAGES/about/about.component';
import { NavbarComponent } from './PAGES/navbar/navbar.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SettingsComponent } from './PAGES/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
