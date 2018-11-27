import { Component, OnInit } from '@angular/core';
import { InputViewModel } from '../shared/components/input/input.viewmodel';


@Component({
  selector: 'app-mvvm-pattern',
  templateUrl: './mvvm-pattern.component.html',
  styleUrls: ['./mvvm-pattern.component.css']
})
export class MvvmPatternComponent implements OnInit {

  public viewModel: InputViewModel;

  ngOnInit(): void {
    this.mapInitialViewModel();
  }

  mapInitialViewModel() {
    this.viewModel = {
      disabled: false,
      isValid: true,
      value: '',
      label: 'My awesome label',
      invalidMessage: 'Invalid Value',
      buttonLabel: 'Press me',
      resetButtonLabel: 'Reset Component'
    };
  }

  mapViewModel(value: string) {
    this.viewModel.value = value;
    this.viewModel.isValid = value.length < 5;
    this.viewModel.disabled = value.length >= 5;
  }

}
