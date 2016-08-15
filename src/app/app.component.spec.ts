import { inject, fakeAsync, addProviders } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  beforeEach(() => {
    addProviders([
      AppComponent
    ]);
  });

  it('should work', inject([AppComponent], (app: AppComponent) => {
    expect(2).toBe(2);
  }));

  it('should pass', inject([AppComponent], fakeAsync((app: AppComponent) => {
    expect(2).toBe(2);
  })))
})
