import { TestBed } from '@angular/core/testing';

import { LocalManagerService } from './local-manager.service';
import { LocalKeys } from './local-manager.service';

describe('LocalManagerService', () => {
  let service: LocalManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set an item in localStorage', () => {
    const key = LocalKeys.token;
    const value = 'testToken';
    
    LocalManagerService.setElement(key, value);
    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should get an item from localStorage', () => {
    const key = LocalKeys.token;
    const value = 'testToken';
    
    localStorage.setItem(key, value);
    expect(LocalManagerService.getElement(key)).toBe(value);
  });

  it('should clear all items in localStorage', () => {
    localStorage.setItem(LocalKeys.token, 'testToken');
    
    LocalManagerService.clearStorage();
    expect(localStorage.getItem(LocalKeys.token)).toBeNull();
  });
});
