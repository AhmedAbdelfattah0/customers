export interface ICustomer {
    id: Number;
    name: String;
    city: String;
    orderTotal?: Number;
    customerSince: any;
}

export interface IOrder {
    customerId: Number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: Number;
    productName: String;
    itemCost: Number;
}
