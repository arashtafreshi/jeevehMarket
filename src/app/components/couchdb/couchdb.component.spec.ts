import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchdbComponent } from './couchdb.component';

describe('CouchdbComponent', () => {
  let component: CouchdbComponent;
  let fixture: ComponentFixture<CouchdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouchdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouchdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
