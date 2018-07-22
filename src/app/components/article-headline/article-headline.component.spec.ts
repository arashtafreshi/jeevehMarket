import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHeadlineComponent } from './article-headline.component';

describe('ArticleHeadlineComponent', () => {
  let component: ArticleHeadlineComponent;
  let fixture: ComponentFixture<ArticleHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
