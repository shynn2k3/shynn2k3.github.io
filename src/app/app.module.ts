import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layuot/footer/footer.component';
import { HeaderComponent } from './layuot/header/header.component';
import { AllProductComponent } from './all-product/all-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShirtsComponent } from './List-Product/shirts/shirts.component';
import { PantsComponent } from './List-Product/pants/pants.component';
import { HoodiesComponent } from './List-Product/hoodies/hoodies.component';
import { PoloComponent } from './List-Product/polo/polo.component';
import { SearchPipe } from './search.pipe';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AllProductComponent,
    HomeComponent,
    ShirtsComponent,
    PantsComponent,
    HoodiesComponent,
    PoloComponent,
    SearchPipe,
    DetailComponent,
    CartComponent,
    CheckOutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
