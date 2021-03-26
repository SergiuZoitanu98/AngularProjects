import { TestBed } from '@angular/core/testing';

import { UserFormServiceService } from './user-form-service.service';

describe('UserFormServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFormServiceService = TestBed.get(UserFormServiceService);
    expect(service).toBeTruthy();
  });
});
