import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { AboutComponent } from './PAGES/about/about.component';
import { NavbarComponent } from './PAGES/navbar/navbar.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SettingsComponent } from './PAGES/settings/settings.component';
import { CreatePostComponent } from './PAGES/create-post/create-post.component';
import { ShortenPipe } from './PIPES/shorten.pipe';
import { QuillModule } from 'ngx-quill';
import { ReadMoreComponent } from './PAGES/read-more/read-more.component';
import { EditPostComponent } from './PAGES/edit-post/edit-post.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { TitlePipe } from './PIPES/title.pipe';
import { DescriptionPipe } from './PIPES/description.pipe';
import { ImagePipe } from './PIPES/image.pipe';

import { LoginComponent } from './PAGES/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SettingsComponent,
    CreatePostComponent,
    ShortenPipe,
    ReadMoreComponent,
    EditPostComponent,
    TitlePipe,
    DescriptionPipe,
    ImagePipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
