import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardClothesComponent } from './shared/card-clothes/card-clothes.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    CardClothesComponent,
    ProductsComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
