import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../../login/auth-guard.service';
import { AuthService } from '../../../login/auth.service';

import { MyCartComponent } from '../my-cart/my-cart.component';
import { UserSammaryOrderComponent } from '../user-sammary-order/user-sammary-order.component';
import { UserPaymentOrderComponent } from '../user-payment-order/user-payment-order.component';
import { UserInformationOrderComponent } from '../user-information-order/user-information-order.component';


const routingApp: Routes = [
  {
    path: 'order',
    component: MyCartComponent,
    //canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'information', component: UserInformationOrderComponent },
          { path: 'payment', component: UserPaymentOrderComponent },
          { path: 'sammary', component: UserSammaryOrderComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routingApp)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OrderRoutingModule { }
