import { BehaviorExampleModule } from './behavior-example.module';

describe('BehaviorExampleModule', () => {
  let behaviorExampleModule: BehaviorExampleModule;

  beforeEach(() => {
    behaviorExampleModule = new BehaviorExampleModule();
  });

  it('should create an instance', () => {
    expect(behaviorExampleModule).toBeTruthy();
  });
});
