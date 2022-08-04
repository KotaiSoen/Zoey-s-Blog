import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './PAGES/contact/contact.component';
import { HomeComponent } from './PAGES/home/home.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { NavbarComponent } from './PAGES/navbar/navbar.component';
import { ReadMoreComponent } from './PAGES/read-more/read-more.component';
import { AboutComponent } from './PAGES/about/about.component';
import { DescriptionPipe } from './PIPES/description.pipe';
import { ShortenPipe } from './PIPES/shorten.pipe';
import { TitlePipe } from './PIPES/title.pipe';
import { ImagePipe } from './PIPES/image.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { QuillModule } from 'ngx-quill';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FooterComponent } from './PAGES/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    ReadMoreComponent,
    AboutComponent,
    DescriptionPipe,
    ShortenPipe,
    TitlePipe,
    ImagePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMasonryModule,
    FontAwesomeModule,
    NgxUiLoaderModule,
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
