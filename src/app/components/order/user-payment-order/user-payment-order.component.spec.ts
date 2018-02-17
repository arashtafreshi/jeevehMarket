import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentOrderComponent } from './user-payment-order.component';

describe('UserPaymentOrderComponent', () => {
  let component: UserPaymentOrderComponent;
  let fixture: ComponentFixture<UserPaymentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaymentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaymentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
