import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AllProductComponent } from './all-product/all-product.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { HoodiesComponent } from './List-Product/hoodies/hoodies.component';
import { PantsComponent } from './List-Product/pants/pants.component';
import { PoloComponent } from './List-Product/polo/polo.component';
import { ShirtsComponent } from './List-Product/shirts/shirts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all', component: AllProductComponent },
  { path: 'shirt', component: ShirtsComponent },
  { path: 'pant', component: PantsComponent },
  { path: 'hoodie', component: HoodiesComponent },
  { path: 'polo', component: PoloComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'card', component: CartComponent },
  { path: 'check', component: CheckOutComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
