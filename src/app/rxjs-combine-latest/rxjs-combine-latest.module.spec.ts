import { RxjsCombineLatestModule } from './rxjs-combine-latest.module';

describe('RxjsCombineLatestModule', () => {
  let rxjsCombineLatestModule: RxjsCombineLatestModule;

  beforeEach(() => {
    rxjsCombineLatestModule = new RxjsCombineLatestModule();
  });

  it('should create an instance', () => {
    expect(rxjsCombineLatestModule).toBeTruthy();
  });
});
