import { Component, Inject } from '@angular/core';
import { DispatcherToken } from '../shared/tokens/dispatch-token';
import { SendInputValueAction } from './store/simple-store.actions';
import { InputValueToken } from './tokens';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-simple-store',
  templateUrl: './simple-store.component.html',
  styleUrls: ['./simple-store.component.css']
})
export class SimpleStoreComponent {

  constructor(
    // we are providing the dispatch function so that the component
    // won't know about the store at all
    // also for easy testing
    @Inject(DispatcherToken)
    private dispatcher: Function,
    // same goes for the selector function
    @Inject(InputValueToken)
    public inputValue$: Observable<string>
  ) {
    // If we make subscription in side of subscription
    // it may lead to unhandled subscriptions of
    // the inner observable

    // this.inputValue$.pipe(take(3)).subscribe(newValue => {
    //   console.log('Outer value => ' + newValue);
    //   this.inputValue$.subscribe(innerSubscription => {
    //     console.log('Inner value -> ' + innerSubscription);
    //   })
    // });

    // The selector will not emit value if the value is  the same
    // as the previous one
    // this.inputValue$.subscribe(res => console.log(res));
  }

  public dispatchInputValue(value) {
    /* After the blur emit input value we dispatch action with SendInputValueAction with
       input value as payload. */
    this.dispatcher(new SendInputValueAction(value));
  }
}
