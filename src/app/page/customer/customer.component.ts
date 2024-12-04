import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customer: any = {
    id: '',
    name: '',
    city: '',
    contact: ''
  };
  constructor(private http:HttpClient) { }
    addCustomer(){
      console.log(this.customer);
      this.http.post('http://localhost:8080/customer/add',this.customer).subscribe(data=>{
          alert("Customer Added Successfully");
          this.clear();
      });
      
    }
    clear(){
      this.customer.id = '';
      this.customer.name = '';
      this.customer.city = '';
      this.customer.contact = '';
    }
    searchCustomer(){
      this.http.get(`http://localhost:8080/customer/search/${this.customer.id}`).subscribe(data=>{
        this.customer = data;
      });
    }
    updateCustomer(){
      console.log(this.customer);
      this.http.put('http://localhost:8080/customer/update',this.customer).subscribe(data=>{
        alert("Customer Updated Successfully");
        this.clear();
      });
    }
    deleteCustomer(){
      this.http.delete(`http://localhost:8080/customer/delete/${this.customer.id}`).subscribe(data=>{
        alert("Customer Deleted Successfully");
        this.clear();
      });
    }
}
