import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports: [BrowserModule, CoreModule, CustomersModule,OrdersModule, SharedModule, AppRoutingModule, ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
