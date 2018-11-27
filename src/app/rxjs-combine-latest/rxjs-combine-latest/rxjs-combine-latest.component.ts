import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FirstInputToken, SecondInputToken } from './tokens';
import { DispatcherToken } from 'src/app/shared/tokens/dispatch-token';
import { combineLatest, takeUntil } from 'rxjs/operators';
import { UpdateFirstValueAction, UpdateSecondValueAction } from './store/rxjs-combine-latest.actions';

@Component({
  selector: 'app-rxjs-combine-latest',
  templateUrl: './rxjs-combine-latest.component.html',
  styleUrls: ['./rxjs-combine-latest.component.css']
})
export class RxjsCombineLatestComponent implements OnDestroy {

  public firstOutput: string;
  public secondOutput: string;
  private firstSubject$: Subject<string> = new Subject<string>();
  private secondSubject$: Subject<string> = new Subject<string>();
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function,
    @Inject(FirstInputToken)
    public firstValueFromStore$: Observable<string>,
    @Inject(SecondInputToken)
    public secondValueFromStore$: Observable<string>
  ) {

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

    this.firstSubject$
      .pipe(
        combineLatest(this.secondSubject$),
        takeUntil(this.onDestroy$),
      )
      .subscribe(([frOutSub, scOutSub]) => {
        this.firstOutput = frOutSub;
        this.secondOutput = scOutSub;
      });
  }

  //  #region combineLatest #2 without Store.
  //   Here we can notify again different behavior when we use combineLatest but without store.
  //   Any of our observables need to have at least one emitted value. Otherwise it wont give us any values.
  //   This behavior it's same like withLatestFrom rxjs operator.
  // #endregion


  // #region combineLatest Summary:
  //   #1 We need to be subscribed to our source observable.
  //   #2 All observables need to have at least one emitted value.
  //   #3 It will give us the values when any of the observables emit a new value.
  // #endregion

  public sendFirstValue(firstValue): void {
    this.firstSubject$.next(firstValue);
    // this.dispatcher(new UpdateFirstValueAction(firstValue));
  }

  public sendSecondValue(secondValue): void {
    this.secondSubject$.next(secondValue);
    // this.dispatcher(new UpdateSecondValueAction(secondValue));
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
