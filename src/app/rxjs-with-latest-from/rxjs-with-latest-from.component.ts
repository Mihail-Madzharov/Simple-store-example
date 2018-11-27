import { Component, Inject, OnDestroy } from '@angular/core';
import { DispatcherToken } from '../shared/tokens/dispatch-token';
import { UpdateFirstValueAction, UpdateSecondValueAction } from './store/rxjs-with-latest-from.actions';
import { FirstValueToken, SecondValueToken } from './tokens';
import { Observable, Subject } from 'rxjs';
import { take, combineLatest, map, withLatestFrom, tap, first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-with-latest-from',
  templateUrl: './rxjs-with-latest-from.component.html',
  styleUrls: ['./rxjs-with-latest-from.component.css']
})
export class RxjsWithLatestFromComponent implements OnDestroy {

  public firstOutput: string;
  public secondOutput: string;
  private counter = 0;
  private firstSubject$: Subject<string> = new Subject<string>();
  private secondSubject$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function,
    @Inject(FirstValueToken)
    public firstValueFromStore$: Observable<string>,
    @Inject(SecondValueToken)
    public secondValueFromStore$: Observable<string>,
  ) {
    //  #region
    //   If we make subscription in side of subscription
    //   it may lead to unhandled subscriptions of
    //   the inner observable
    // #endregion

    this.firstValueFromStore$.pipe(
      take(4))
      .subscribe(firstOut => {
        this.firstOutput = firstOut;
        this.secondValueFromStore$
          .subscribe(secondOut => {
            this.counter++;
            this.secondOutput = this.counter.toString();
          });
      });


    // withLatestFrom Operator.

    //  #region withLatestFrom #1 and Store
    //   Here we use withLatestFrom RxJS Operator.
    //   Workflow: Every time when our source emit new value(firstValue$) we will take
    //   latests values from all observables in withLatestFrom(). In this case we just use
    //   secondValue$ as inner observable.
    // #endregion

    // this.firstValueFromStore$
    //   .pipe(
    //     withLatestFrom(this.secondValueFromStore$),
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe(([firstOut, secondOut]) => {
    //     this.firstOutput = firstOut;
    //     this.secondOutput = secondOut;
    //   });

    //  #region withLatestFrom #2 without Store
    //   In this example we can notify different behavior from previous example(#1).
    //   At example #1 anytime when the source emit data will be displayed. Reason for this
    //   behavior it's because we use the store and we set initial values to our observables.
    //   Here we dont use the store and we dont set any initial values. withLatestFrom will
    //   be triggered only when all observables have emitted at least one value. In other words
    //   if source emit values and inner observable(subject) do not emit value withLatestFrom
    //   wont be triggered. It's a same flow in opposite way if inner observables emit values but source haven't emitted
    //    any values withLatestFrom wont trigger.
    // #endregion

    // this.firstSubject$
    //   .pipe(
    //     withLatestFrom(this.secondSubject$),
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe(([frOutSub, scOutSub]) => {
    //     this.firstOutput = frOutSub;
    //     this.secondOutput = scOutSub;
    //   });

    // #region withLatestFrom Summary:
    //   #1 We need to be subscribed to our source observable.
    //   #2 All observables need to have at least one emitted value.
    //   #3 It will give us the values only when the source emit a new value.
    // #endregion

    // #region combineLatest #1 and Store
    //   Here we use combineLatest operator
    //   Workflow: First we need to subscribe to our source observable. Then any time when any of our
    //   observables emit new value we will receive last values from all observables. At first example
    //   again we are using store and by default we set initial values to the state. In this case
    //   we can see clearly any time when the user fill the input and click the Send button our observable
    //   will emit new value and it will be displayed.
    // #endregion

    // this.firstValueFromStore$
    //   .pipe(
    //     combineLatest(this.secondValueFromStore$),
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe(([firstOut, secondOut]) => {
    //     this.firstOutput = firstOut;
    //     this.secondOutput = secondOut;
    //   });

    //  #region combineLatest #2 without Store.
    //   Here we can notify again different behavior when we use combineLatest but without store.
    //   Any of our observables need to have at least one emitted value. Otherwise it wont give us any values.
    //   This behavior it's same like withLatestFrom rxjs operator.
    // #endregion


    // this.firstSubject$
    //   .pipe(
    //     combineLatest(this.secondSubject$),
    //     takeUntil(this.onDestroy$),
    //   )
    //   .subscribe(([frOutSub, scOutSub]) => {
    //     this.firstOutput = frOutSub;
    //     this.secondOutput = scOutSub;
    //   });

    // #region combineLatest Summary:
    //   #1 We need to be subscribed to our source observable.
    //   #2 All observables need to have at least one emitted value.
    //   #3 It will give us the values when any of the observables emit a new value.
    // #endregion

    //  #region withLatestFrom vs combineLatest
    //   withLatestFrom - emit only when the source emit new value and all observables already have at least one emitted value.
    //   combineLatest - emit when any of the observables emit new value and all observables already have at least one emitted value.
    // #endregion
  }

  public sendFirstValue(firstValue): void {
    // this.firstSubject$.next(firstValue);
     this.dispatcher(new UpdateFirstValueAction(firstValue));
  }

  public sendSecondValue(secondValue): void {
    // this.secondSubject$.next(secondValue);
     this.dispatcher(new UpdateSecondValueAction(secondValue));
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
