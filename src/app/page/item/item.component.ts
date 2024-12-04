import { Component } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  x: any="Avalible";
  Y: any="Not Avalible";
  itemlist: any = [];
  itemId: any;
item: any={
    itemId: '',
    name: "",
    rentalPreDay: '',
    finePreDay: '',
    availability: ""
}

  constructor(private http:HttpClient) {
    this.loadItem();
  }

  addItem(){
    console.log(this.item);
    this.http.post('http://localhost:8080/item/add',this.item).subscribe(data=>{
      alert("Item Added Successfully");
      this.loadItem();
      this.clear();
    });
  }
  loadItem(){
    this.http.get('http://localhost:8080/item/get-all').subscribe(data=>{
      this.itemlist=data;
    });
  }
  searchItem(){
    this.http.get(`http://localhost:8080/item/search/${this.itemId}`).subscribe(data=>{
      this.item=data;
    });
  }
  updateItem(){
    console.log(this.item);
    this.http.put('http://localhost:8080/item/update',this.item).subscribe(data=>{
      alert("Item Updated Successfully");
      this.loadItem();
      this.clear();
    });
  }
  deleteItem(){
    this.http.delete(`http://localhost:8080/item/delete/${this.item.itemId}`).subscribe(data=>{
      alert("Item Deleted Successfully");
      this.loadItem();
      this.clear();
    });
  }
  clear(){
    this.item={
      itemId: '',
      name: "",
      rentalPreDay: '',
      finePreDay: '',
      availability: ""
    }
    this.itemId='';
  }
}
