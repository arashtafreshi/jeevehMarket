import { TestBed, inject } from '@angular/core/testing';

import { CouchdbService } from './couchdb.service';

describe('CouchdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouchdbService]
    });
  });

  it('should be created', inject([CouchdbService], (service: CouchdbService) => {
    expect(service).toBeTruthy();
  }));
});
