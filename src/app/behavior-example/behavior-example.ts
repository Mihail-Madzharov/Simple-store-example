import { Injectable, Inject } from '@angular/core';
import { InputValueToken } from './tokens';
import { Observable } from 'rxjs';
import { InputBehaviorViewModel } from './behavior-view.model';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BehaviorExample {

  public inputBehavior$: Observable<InputBehaviorViewModel>;

  constructor(
    @Inject(InputValueToken)
    private inputValue$: Observable<string>
  ) {
    this.inputBehavior$ = this.inputValue$
      .pipe(
        filter(e => e != null),
        map(inputValue => {
          return {
            value: inputValue,
            disabled: false,
            isValidLength: inputValue.length > 5,
            validLength: 5,
            textColor: inputValue.length % 2 === 0
          } as InputBehaviorViewModel;
        })
      );
  }

}
