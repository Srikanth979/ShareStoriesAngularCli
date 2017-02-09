/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpGlobalService } from './http-global.service';

describe('HttpGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGlobalService]
    });
  });

  it('should ...', inject([HttpGlobalService], (service: HttpGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
