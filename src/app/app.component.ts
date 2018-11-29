import { Component } from '@angular/core';
import { FetchDataFlowService } from './fetch-data-flow/fetch-data-flow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: FetchDataFlowService) {}
  title = 'redux-example';
}
