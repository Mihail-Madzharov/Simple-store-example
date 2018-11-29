import { cold } from 'jasmine-marbles';
import { UpdateInputValueAction, SaveResponseAction, HandleErrorAction } from './fetch-data-flow.actions';
import { Actions } from '@ngrx/effects';
import { FetchDataFlowEffects } from './fetch-data-flow.effects';
import {  BehaviorSubject } from 'rxjs';


class FetchDataFlowServiceMock {
  public data = new BehaviorSubject<any>('str');
  public fetchApi() {
    return this.data;
  }
}

fdescribe('Test Fetch data flow effect', () => {
  let service: FetchDataFlowServiceMock;

  beforeEach(() => {
    service = new FetchDataFlowServiceMock();
  });

  function instantiateEffect(source) {
    const actions = new Actions(source);

    return new FetchDataFlowEffects(
      actions,
      service as any
    );
  }

  describe('test effect', () => {
    it('should effect response should return observable', () => {
      const expectedOut = { title: 'title', info: ['mock1', 'mock2'] };
      const source = cold('a', { a: new UpdateInputValueAction('ffff') });

      service.data.next(['title', ['mock1', 'mock2']]);

      const effect = instantiateEffect(source);
      const expected = cold('a', { a: new SaveResponseAction(expectedOut) });

      expect(effect.getResponse$).toBeObservable(expected);
    });

    it('should throw error', () => {
      const source = cold('', { a: new UpdateInputValueAction('') });
      service.data.next(null);

      const effect = instantiateEffect(source);
      const expected = cold('', { a: new HandleErrorAction('Error') });

      expect(effect.getResponse$).toBeObservable(expected);
    });

    it('should fetch data for second time when user enter input and ignore first', () => {
      const expectedOut = { title: 'mockTitle', info: ['mock1', 'mock2'] };
      const source = cold('a', { a: new UpdateInputValueAction('payload') });

      service.data.next(['title', ['mock1', 'mock2']]);
      service.data.next(['mockTitle', ['mock1', 'mock2']]);

      const effect = instantiateEffect(source);
      const expected = cold('a', { a: new SaveResponseAction(expectedOut) });

      expect(effect.getResponse$).toBeObservable(expected);
    });
  });
});
