import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuardService } from '../../../services/auth-guard.service';
import { AuthService } from '../../../services/auth.service';

import { MyCartComponent } from '../my-cart/my-cart.component';
import { UserSammaryOrderComponent } from '../user-sammary-order/user-sammary-order.component';
import { UserPaymentOrderComponent } from '../user-payment-order/user-payment-order.component';
import { UserInformationOrderComponent } from '../user-information-order/user-information-order.component';

import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    MyCartComponent,
    UserPaymentOrderComponent,
    UserInformationOrderComponent,
    UserSammaryOrderComponent
  ],
  providers: [AuthService, AuthGuardService]
})
export class OrderModule { }
