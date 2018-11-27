import { NgrxEffectsModule } from './ngrx-effects.module';

describe('NgrxEffectsModule', () => {
  let ngrxEffectsModule: NgrxEffectsModule;

  beforeEach(() => {
    ngrxEffectsModule = new NgrxEffectsModule();
  });

  it('should create an instance', () => {
    expect(ngrxEffectsModule).toBeTruthy();
  });
});
