import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSammaryOrderComponent } from './user-sammary-order.component';

describe('UserSammaryOrderComponent', () => {
  let component: UserSammaryOrderComponent;
  let fixture: ComponentFixture<UserSammaryOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSammaryOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSammaryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
