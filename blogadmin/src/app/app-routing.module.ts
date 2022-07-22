import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './PAGES/about/about.component';
import { CreatePostComponent } from './PAGES/create-post/create-post.component';
import { EditPostComponent } from './PAGES/edit-post/edit-post.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ReadMoreComponent } from './PAGES/read-more/read-more.component';
import { SettingsComponent } from './PAGES/settings/settings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'read-more/:id', component: ReadMoreComponent},
  {path: 'edit-post', component: EditPostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
