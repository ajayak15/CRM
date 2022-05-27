import { Component, OnInit } from '@angular/core';
import {YService} from '../app/y.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customer: any = [];

  constructor(private apiService: YService) {
    this.readCustomer();
  }

  ngOnInit() {}

  readCustomer() {
    this.apiService.getCustomer().subscribe((data) => {
      this.customer = data;
    });
  }

  removeCustomer(customer, index) {
      this.apiService.deleteCustomer(customer._id).subscribe((data) => {
        this.customer.splice(index, 1);
      });
  }

}
