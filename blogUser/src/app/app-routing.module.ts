import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './PAGES/about/about.component';
import { ContactComponent } from './PAGES/contact/contact.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ReadMoreComponent } from './PAGES/read-more/read-more.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'read-more/:id', component: ReadMoreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
