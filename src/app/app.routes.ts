import { Routes } from '@angular/router';
import { CustomerComponent } from './page/customer/customer.component';
import { ItemComponent } from './page/item/item.component';
import { RentalComponent } from './page/rental/rental.component';

export const routes: Routes = [
    {
        path: '',
        component:CustomerComponent
    },
    {
        path: 'customer',
        component:CustomerComponent
    },
    {
        path:'item',
        component:ItemComponent
    },
    {
        path:'rental',
        component:RentalComponent
    }
];
