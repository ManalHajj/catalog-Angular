import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { BillingComponent } from './billing/billing.component';

export function kcFactory(kcService : KeycloakService){
  return()=>{
    kcService.init({
      config:{
        realm : "my-app-realm",
        clientId : "my-app-client",
        url : "http://localhost:8080"

      },
      initOptions:{
        onLoad : "check-sso",
        checkLoginIframe : true
      }
    })

  }
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    LoginComponent,
    AdminTemplateComponent,
    NewProductComponent,
    EditProductComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER, deps:[KeycloakService],useFactory:kcFactory,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
