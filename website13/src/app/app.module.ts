import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    CarouselComponent,
    ContactComponent,
    TestComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
