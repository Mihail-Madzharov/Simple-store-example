import { Component, OnInit, Inject } from '@angular/core';
import { NgrxInputValueToken } from './token';
import { Observable } from 'rxjs';
import { DispatcherToken } from '../shared/tokens/dispatch-token';
import { UpdateNgrxInputValueAction } from './store/ngrx-effects.actions';

@Component({
  selector: 'app-ngrx-effects',
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.css']
})
export class NgrxEffectsComponent {

  constructor(
    @Inject(NgrxInputValueToken) public inputValue$: Observable<string>,
    @Inject(DispatcherToken) private dispatcher: Function
  ) { }

  updateInputValue(value: any) {
    this.dispatcher(new UpdateNgrxInputValueAction(value));
  }
}
