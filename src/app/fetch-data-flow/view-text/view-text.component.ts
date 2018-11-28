import { Component, Input } from '@angular/core';
import { FetchDataFlowViewModel } from './fetch-data-flow.viewmodel';

@Component({
  selector: 'app-view-text',
  templateUrl: './view-text.component.html',
  styleUrls: ['./view-text.component.css']
})
export class ViewTextComponent {

  @Input()
  viewModel: FetchDataFlowViewModel;
}
