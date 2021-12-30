import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "about", component : AboutComponent},
  { path : "contact", component : ContactComponent},
  { path : "", redirectTo : "/home", pathMatch : "full"},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  { path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent    
  ]
})
export class AppRoutingModule { }
