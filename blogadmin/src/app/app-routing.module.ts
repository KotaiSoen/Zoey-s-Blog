import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './PAGES/about/about.component';
import { CreatePostComponent } from './PAGES/create-post/create-post.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SettingsComponent } from './PAGES/settings/settings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
