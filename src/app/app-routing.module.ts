import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCustomerComponent} from '../create-customer/create-customer.component'
import {CustomersComponent} from '../customers/customers.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-customer' },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'customer-list', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }


