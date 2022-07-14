import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { AboutComponent } from './PAGES/about/about.component';
import { NavbarComponent } from './PAGES/navbar/navbar.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SettingsComponent } from './PAGES/settings/settings.component';
import { CreatePostComponent } from './PAGES/create-post/create-post.component';
import { FooterComponent } from './PAGES/footer/footer.component';
import { ShortenPipe } from './shorten.pipe';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SettingsComponent,
    CreatePostComponent,
    FooterComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
