import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserDashboardComponent } from './Components/Customer/user-dashboard/user-dashboard.component';
import { BudgetComponent } from './Components/Customer/budget/budget.component';
import { FundTransferComponent } from './Components/Customer/fund-transfer/fund-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UserDashboardComponent,
    BudgetComponent,
    FundTransferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
