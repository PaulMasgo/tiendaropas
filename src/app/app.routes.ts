import { RouterModule, Router, Routes  } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

const APP_ROUTES:Routes = [
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contact',component:ContactComponent},
    {path:'blog',component:BlogComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
] ;

export const app_routing = RouterModule.forRoot(APP_ROUTES);

