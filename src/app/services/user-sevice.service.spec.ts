import { TestBed, inject } from '@angular/core/testing';

import { UserSeviceService } from './user-sevice.service';

describe('UserSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSeviceService]
    });
  });

  it('should be created', inject([UserSeviceService], (service: UserSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
