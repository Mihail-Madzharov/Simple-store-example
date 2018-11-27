import { RxjsOperatorsModule } from './rxjs-with-latest-from.module';

describe('RxjsOperatorsModule', () => {
  let rxjsOperatorsModule: RxjsOperatorsModule;

  beforeEach(() => {
    rxjsOperatorsModule = new RxjsOperatorsModule();
  });

  it('should create an instance', () => {
    expect(rxjsOperatorsModule).toBeTruthy();
  });
});
