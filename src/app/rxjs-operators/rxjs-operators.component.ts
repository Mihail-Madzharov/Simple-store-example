import { Component, OnInit, Inject } from '@angular/core';
import { DispatcherToken } from '../shared/tokens/dispatch-token';
import { UpdateFirstValueAction, UpdateSecondValueAction } from './store/rxjs-operators.actions';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent {

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function
  ) { }

  public sendFirstValue(firstValue): void {
    this.dispatcher(new UpdateFirstValueAction(firstValue));
  }

  public sendSecondValue(secondValue): void {
    this.dispatcher(new UpdateSecondValueAction(secondValue));
  }
}
