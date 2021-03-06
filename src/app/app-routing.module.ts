import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent } from './home/home.component';
import{AboutComponent } from './about/about.component';
import{ContactComponent } from './contact/contact.component';
import{SigninComponent } from './signin/signin.component';
import{TestComponent } from './test/test.component'


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'signin',component:SigninComponent},
  {path: 'test', component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
