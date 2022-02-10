import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ErrorComponent } from './error/error.component';
// import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:'home',component:CarouselComponent},
{path:'#',component:CarouselComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
// {path:'login',component:LoginComponent},
{path:'form',component:FormComponent},
{path:'main',component:HomeComponent},
{path:"**",component:ErrorComponent},{path:"", redirectTo:'/main',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
