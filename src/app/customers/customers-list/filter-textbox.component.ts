import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'filter-textbox',
    template: `
  Filter: <input type="text" />
  `,
    styleUrls: ['./customers-list.component.css']
})
export class FilterTextboxComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
