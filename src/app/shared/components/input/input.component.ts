import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputViewModel } from './input.viewmodel';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  viewModel: InputViewModel;

  @Output()
  output = new EventEmitter();

  @Output()
  resetComponent = new EventEmitter();

  emitValue(value: string) {
    this.output.emit(value);
  }

  resetComponentState() {
    this.resetComponent.emit();
  }
}
