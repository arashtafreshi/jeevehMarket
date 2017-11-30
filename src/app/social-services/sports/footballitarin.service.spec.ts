import { TestBed, inject } from '@angular/core/testing';

import { FootballitarinService } from './footballitarin.service';

describe('FootballitarinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballitarinService]
    });
  });

  it('should be created', inject([FootballitarinService], (service: FootballitarinService) => {
    expect(service).toBeTruthy();
  }));
});
