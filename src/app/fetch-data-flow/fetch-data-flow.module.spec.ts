import { FetchDataFlowModule } from './fetch-data-flow.module';

describe('FetchDataFlowModule', () => {
  let fetchDataFlowModule: FetchDataFlowModule;

  beforeEach(() => {
    fetchDataFlowModule = new FetchDataFlowModule();
  });

  it('should create an instance', () => {
    expect(fetchDataFlowModule).toBeTruthy();
  });
});
