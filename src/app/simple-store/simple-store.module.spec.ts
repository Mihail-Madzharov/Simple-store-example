import { SimpleStoreModule } from './simple-store.module';

describe('SimpleStoreModule', () => {
  let simpleStoreModule: SimpleStoreModule;

  beforeEach(() => {
    simpleStoreModule = new SimpleStoreModule();
  });

  it('should create an instance', () => {
    expect(simpleStoreModule).toBeTruthy();
  });
});
