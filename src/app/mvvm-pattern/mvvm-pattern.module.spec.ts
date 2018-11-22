import { MvvmPatternModule } from './mvvm-pattern.module';

describe('MvvmPatternModule', () => {
  let mvvmPatternModule: MvvmPatternModule;

  beforeEach(() => {
    mvvmPatternModule = new MvvmPatternModule();
  });

  it('should create an instance', () => {
    expect(mvvmPatternModule).toBeTruthy();
  });
});
