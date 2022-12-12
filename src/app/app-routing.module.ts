import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
//import {LoginComponent} from "./login/login.component";
//import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {BillingComponent} from "./billing/billing.component";
import {AuthGuard} from "./guards/security.guards";

const routes: Routes = [
  //{path:"login", component : LoginComponent},
  //{path:"", component : LoginComponent},

      {path:"products", component : ProductsComponent},
      {path:"customers", component : CustomersComponent},
      {path:"billing", component : BillingComponent, canActivate:[AuthGuard], data:{roles : ['USER']}},
      {path:"newProduct", component : NewProductComponent,canActivate:[AuthGuard], data:{roles : ['USER','ADMIN']}},
      {path:"editProduct/:id", component : EditProductComponent,canActivate:[AuthGuard], data:{roles : ['USER','ADMIN']}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
