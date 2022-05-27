
import { YService } from '../app/y.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  submitted = false;
  customerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: YService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      age :['',Validators.required]
    });


  onSubmit() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return false;
    } else {
      return this.apiService.createCustomer(this.customerForm.value).subscribe({
        complete: () => {
          console.log('Customer successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/Customer-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
