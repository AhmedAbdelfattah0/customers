# Customers List Component - Angular Components & Modules

Quick start:

```
$ npm install
$ npm run build
````

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ npm run watch
```
In this course, Dan guides you through creating your very rst Angular app using TypeScript. By completing the course you’ll add valuable skills to your toolbelt.
Now let’s have a look at how the course is structured!
Part #1: Course overview
 
In the introductory video, Dan gives an overview of the course, key aspects of Angular, and how the course is laid out. He also tells you a little bit about his background, so that you are familiar with him before jumping into the code of your new app.
Part #2: Application Overview
In this part, Dan gives us a glimpse into the app we’re going to build. It is designed to allow us to focus on the key building blocks of Angular. By creating an app to display customer data and their orders, we will hone in on the key aspects of Angular, such as Components, Modules, Services and Routing. Also, during the course, we will learn about great features every app has, like sorting and 	ltering.
 
Part #3: Angular CLI
In this part we learn the basics of using the Angular CLI (command-line interface) tool and walk through the basic commands:
ng --version   ng --help   ng new my-app-name   ng generate [component | directive | pipe | service | class | interface ng build    ng serve   ng lint    ng tests 
 
For example, ng --new my-app-name will create a new blank Angular app for us and we can use ng -generate to create parts of our app.
ng build will build everything for us, and ng serve -o will even start a
development server as well as open a browser window for us to view our app in.
Part #4: Project Files Overview
In this video of the course, Dan gives a basic overview of the CLI command for generating a blank Angular app and gives a quick overview of the con guration les like tslint , tsconfig and protractor in our app folder.
Part #5: The Big Picture
Here we learn a useful abstraction that Components are similar to Lego blocks — we build up components and then use them to stick together to make an app. We also get a quick refresher on JavaScript language family and learn where TypeScripts 	ts in.
 
Dan gives us a good mental model to use for thinking about our code while working with Angular so we can imagine where it all 	ts in.
Part #6: Components & Modules — Overview
Not abstracted away, the diagram for Angular code might look like this.
 
Components are made up of code and HTML template and it can have a selector, so we can call it in our HTML.
 
<appcomponent></appcomponent> 
Every Component consists of:
 
Dan then explains what each of the parts is and how they 	t in the Angular way of developing components. One of the great things about Angular is that it’s very predictable. Once you learn how to create your 	rst component you’re well on your way to creating additional components.
Part #7: Components & Modules — App Component
In this part of the course, we look at a HelloWorld component.
 
Dan breaks down every aspect of the component for us and explains how it’s used and how our component is processed by Angular, how it’s added to app.module and ultimately how it’s rendered on our screens.
We learn that selector: 'app-root' is what allows us to later call the component from our HTML using <app-root></app-root>
We also have a sneak peek at data binding which we’ll learn more about in later chapters.
Part #8: Components & Modules — App Module
In this screencast, we spend more time learning about the inner workings of app.module which we touched on in the previous cast and learn about NgModule and BrowserModule .
Part #9: Components & Modules — Adding a Customers Component
In this cast, Dan gives us some tips on creating components using the CLI and then shows how to create components manually. We learn how to structure a component further expanding on our knowledge from Part #6.
 
Now we bring in some data to mimic our API and learn about how modules help us keep our code organized and easier to re-use.
Part #10: Components & Modules — Adding a Customers List component
In this part, we create a customers-list.component which is an HTML table to display our list of customers. We quickly register in customers.mo dule and use the <app-customers-list></app-customers-list> selector to display our empty table.
 
Next step would be to populate the table with some data.
Part #11: Components & Modules — Adding a Filter Textbox Component
Before we add some data to our table, Dan shows us how to add a filtertextbox.component to our table and we reinforce the Angular way of creating a component, registering it in a module and using it in our HTML with selectors.
 
Part #12: Components & Modules — Adding a Shared Module and Interfaces
In this section, Dan talks about using shared.module — a module where we put components or other features that we want to share throughout our app, not just in customers .
We also have a quick refresher on TypeScript interfaces and how they can be used in Angular applications to provide better code help and enhance productivity.
export interface ICustomer {       id: number;       name: string;       city: string;       orderTotal?: number;       customerSince: any;   
} 
Part #13: Data Binding — Data Binding Overview
In this chapter we learn about data binding, learn a few techniques and see how to add data binding to our application.
We usually bind data in our templates. Data binding comes into play when a component gets our data and hooks it into a template. We can get data into a template using Property Binding , and handle user events and get data out of a template using Event Binding . Angular provides a robust and clean way to add data binding in templates that’s quick and easy to remember.
Dan provides us with a handy slide to remember syntax required…
 
…and some on Angular directives, for example, ngFor , used to loop through items in a collection and get some properties from the items, and
ngIf to add and remove an HTML element from the DOM.
Part #14: Data Binding — Getting Started with
In this cast we play around with Data Binding Property Binding and Event Binding to better understand how they work in Angular, using the knowledge from the previous chapter.
Dan shows how we can use the [hidden] property to display an h1 element dynamically:
<h1 [hidden]="!isVisible">{{ title }}</h1> 
And to bind DOM events such as click:
<button (click)="changeVisibility()">Show/Hide</button> 
Part #15: Data Binding — Directives and
Interpolation
Here we have a look at Interpolation. The rationale is that we need to get data from each customer to generate a table row in a table from Part #10.
This is the part when things start coming together: we use directive ngFor to loop through each customer in filteredCustomers and interpolate data from a customer into a table row. We learn a few tricks about rendering data conditionally using ngIf .
 
Part #16: Data Binding — Event Binding
Event Binding is crucial when we need to handle an event, like a mouse move or a click. In this screencast, Dan guides us through adding functionality to sort the data in our table. We will start on it in this chapter
	and 	nish it when we get to the Services part of our course.
We create a placeholder event handler in our customer-list.component :
sort(prop: string) {   
     // A sorter service will handle the sorting   } 
Add binding in customers-list.component.html :
<tr>   
    <th (click)="sort('name')">Name</th>   
    <th (click)="sort('city')">City</th>   
    <th (click)="sort('orderTotal')">Order Total</th>   </tr> 
Part #17: Data Binding — Input Properties
We have some data in a people array in our customers.component and we need to pass it into our filteredCustomers array in customers-list.compo nent , effectively passing data from a parent component to a child.
For that we will use Angular’s Input property which relies on a decorator named Input():
@Input() get customers(): ICustomer[] {       return this._customers   
}  set customers(value: ICustomer[]) {        if (value) {        this.filteredCustomers = this._customers = value;        this.calculateOrders();   
     }   
} 
 
And bind to it in our parent component template to pass data from parent to child (app-customers-list in this case):
<app-customers-list [customers]="people"></app-customers-list> 
Part #18: Data Binding — Working with Pipes
Wow! We’ve done quite well so far!
 
There are a few things which might look a bit odd — “john” is lowercase and we have no “$” symbol to display currency in which we have our orders.
This is really the way we have our data, so we could just go and update it directly, or we can use a built-in Angular feature called Pipes to update it for us!
Some of the simplest pipes look like this:
{{ cust.name | uppercase }} // renders JOHN   
{{ cust.name | titlecase }} // renders John 
But sometimes you might want to have your own custom pipe and Dan shows us how to build a custom capitalize pipe (note that Angular includes one called titlecase — but we’re learning here!) and how to wire it up to use in our application.
Part #19: Data Binding — Adding Filtering
In this cast, Dan walks us through adding functionality to our filter-text box.component from Part #11
We learn more about Angular Output and EventEmitter properties, create our lter event handler and bind it to our lter textbox:
<filter-textbox (changed)="filter($event)"></filter-textbox> 
	And there we go, we can now 	lter on our customers’ names!
 
Part #20: Services and Http — Services Overview
In this chapter, we look at Angular Services. One of Angular’s strong points is that it’s a complete framework that provides built-in support for managing state and objects through services. We saw services in the diagram earlier. Since we don’t want components to know how to do too much, we’ll rely on services to communicate with the server, perform client-side validation or calculations, etc.
 
Luckily, Dan get us covered with a handy slide to keep in mind.
 
Part #21: Services and Http — Creating and Providing a Service
From a chapter earlier we have seen an import of Injectible which is a decorator that allows for something called Dependency Injection or DI for short (another powerful feature built-into Angular).
We’ll use DI to access an HttpClient service which we will use to communicate with a RESTful service. We will be adding HttpClient to a constructor of our data.service and @Injectible() decorator will make DI possible.
 
Part #22: Services and Http — Calling the Server with HttpClient
In this cast, Dan introduces Observables from RxJS — reactive extensions for JavaScript, which is not a part of Angular but is included in all Angular projects by default.
We will be using Observables to deal with asynchronous code. In a nutshell, it allows us to start an operation and then subscribe to data that is returned. Once the data comes back from the server, the subscription ends and we can unsubscribe.
Dan discusses the necessary code to call the server and then subscribe to the response using RxJS piping and operators.
Here’s an example of how we can get Orders:
 
Part #23: Services and Http — Injecting a Service into a Component
Now that we have a way to get the data, we need to inject the service into one of our components. We can now change this.people in customers.co mponent from being hardcoded to call a service and get data that way.
We need to bring our data.service to app.module and then in customer s.component we can:
import { DataService } from '../core/data.service'; 
