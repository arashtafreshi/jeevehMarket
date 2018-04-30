import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTopnavComponent } from './menu-topnav.component';

describe('MenuTopnavComponent', () => {
  let component: MenuTopnavComponent;
  let fixture: ComponentFixture<MenuTopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTopnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
