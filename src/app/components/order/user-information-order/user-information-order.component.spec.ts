import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationOrderComponent } from './user-information-order.component';

describe('UserInformationOrderComponent', () => {
  let component: UserInformationOrderComponent;
  let fixture: ComponentFixture<UserInformationOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
