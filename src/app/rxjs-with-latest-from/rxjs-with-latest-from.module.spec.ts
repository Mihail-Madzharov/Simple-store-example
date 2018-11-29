import { RxjsWithLatestFromModule } from './rxjs-with-latest-from.module';

describe('RxjsOperatorsModule', () => {
  let rxjsOperatorsModule: RxjsWithLatestFromModule;

  beforeEach(() => {
    rxjsOperatorsModule = new RxjsWithLatestFromModule();
  });

  it('should create an instance', () => {
    expect(rxjsOperatorsModule).toBeTruthy();
  });
});
