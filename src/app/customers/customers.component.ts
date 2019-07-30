import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title: string;
    people: ICustomer[];
    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this.title = 'Customers';
        this._dataService.getCustomers().subscribe((customers: ICustomer[]) => {
            return this.people = customers
        })
    }


}
