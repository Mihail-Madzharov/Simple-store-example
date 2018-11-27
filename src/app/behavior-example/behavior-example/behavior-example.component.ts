import { Component, Inject } from '@angular/core';
import { DispatcherToken } from 'src/app/shared/tokens/dispatch-token';
import { UpdateInputAction } from '../store/behavior-example.actions';
import { BehaviorExample } from '../behavior-example';

@Component({
  selector: 'app-behavior-example',
  templateUrl: './behavior-example.component.html',
  styleUrls: ['./behavior-example.component.css']
})
export class BehaviorExampleComponent {

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function,
    public behavior: BehaviorExample
  ) { }

  public sendValue(inputValue): void {
    this.dispatcher(new UpdateInputAction(inputValue));
  }
}
