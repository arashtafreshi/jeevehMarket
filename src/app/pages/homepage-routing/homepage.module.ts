import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AuthGuardService } from '../../login/auth-guard.service';
import { AuthService } from '../../login/auth.service';

import { HomepageComponent } from '../homepage/homepage.component';
import { Link1Component } from '../link1/link1.component';
import { Link2Component } from '../link2/link2.component';
import { Link3Component } from '../link3/link3.component';

import {HomepageRoutingModule} from './homepage-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HomepageRoutingModule
    ],
    declarations: [
      HomepageComponent,
      Link1Component,
      Link2Component,
      Link3Component
    ],
    providers: [ AuthService, AuthGuardService ]
  })
  export class HomepageModule {}