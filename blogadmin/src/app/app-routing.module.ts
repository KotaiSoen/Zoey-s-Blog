import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from './GUARDS/unsaved-changes.guard';
import { AboutComponent } from './PAGES/about/about.component';
import { CreatePostComponent } from './PAGES/create-post/create-post.component';
import { EditPostComponent } from './PAGES/edit-post/edit-post.component';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { ReadMoreComponent } from './PAGES/read-more/read-more.component';
import { SettingsComponent } from './PAGES/settings/settings.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'about', component: AboutComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'settings', component: SettingsComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'create-post', component: CreatePostComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'read-more/:id', component: ReadMoreComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'edit-post/:id', component: EditPostComponent, canDeactivate: [UnsavedChangesGuard], ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
