import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleOverviewComponent } from './admin-article-overview.component';

describe('AdminArticleOverviewComponent', () => {
  let component: AdminArticleOverviewComponent;
  let fixture: ComponentFixture<AdminArticleOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticleOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
