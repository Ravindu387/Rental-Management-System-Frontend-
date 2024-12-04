import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {
    customerlist: any = [];
    itemlist: any = [];
    rentalList: any = [];
    rental: any = {
        id: '',
        cusName: '',
        itemName: '',
        rentalDate: '',
        dueDate: '',
        returnDate: '',
        totalCost: '',
        quantity: ''
        
    }

    constructor(private http:HttpClient) {
      this.loadcustomer();
      this.loadItem();
      this.loadRental();
    }

    addRental() {
      console.log(this.rental);
        this.http.post('http://localhost:8080/rental/add', this.rental).subscribe(data => {
            alert("Rental Added Successfully");
        });
    }
    loadcustomer() {    
        this.http.get('http://localhost:8080/customer/get-all').subscribe(data => {
            this.customerlist = data;
        });
    }
    loadItem() {    
        this.http.get('http://localhost:8080/item/get-all').subscribe(data => {
            this.itemlist = data;
        });
    }
    loadRental() {    
        this.http.get('http://localhost:8080/rental/get-all').subscribe(data => {
            this.rentalList = data;
        });
    }
    updateRental() {
        console.log(this.rental);
        this.http.put('http://localhost:8080/rental/update', this.rental).subscribe(data => {
            alert("Rental Updated Successfully");
        });
    }
    deleteRental() {
        this.http.delete(`http://localhost:8080/rental/delete/${this.rental.id}`).subscribe(data => {
            alert("Rental Deleted Successfully");
        });
    }
    searchRental() {
        this.http.get(`http://localhost:8080/rental/search/${this.rental.id}`).subscribe(data => {
            this.rental = data;
        });
    }

}
