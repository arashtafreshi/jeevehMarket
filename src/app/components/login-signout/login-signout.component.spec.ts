import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignoutComponent } from './login-signout.component';

describe('LoginSignoutComponent', () => {
  let component: LoginSignoutComponent;
  let fixture: ComponentFixture<LoginSignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
