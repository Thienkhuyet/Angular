import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
// material-component
import { MatTabsModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MomentDateModule } from '@angular/material-moment-adapter'
import { OrderNewComponent } from './order-new/order-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MomentDateModule
  ]
})
export class OrdersModule { }
