import { TestBed, inject } from '@angular/core/testing';

import { P44APIService } from './p44-api.service';

describe('P44APIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [P44APIService]
    });
  });

  it('should ...', inject([P44APIService], (service: P44APIService) => {
    expect(service).toBeTruthy();
  }));
});
