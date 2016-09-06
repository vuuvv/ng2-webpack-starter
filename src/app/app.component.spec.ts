import { inject, TestBed, fakeAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });
  });

  it('should work', inject([AppComponent], (app: AppComponent) => {
    expect(2).toBe(2);
  }));

  it('should pass', inject([AppComponent], fakeAsync((app: AppComponent) => {
    expect(2).toBe(2);
  })))
})
