import { TestBed } from '@angular/core/testing';

import { SecureInnerpageGuard } from './firebaseAuth/secure-innerpage.guard';

describe('SecureInnerpageGuard', () => {
  let guard: SecureInnerpageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SecureInnerpageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
