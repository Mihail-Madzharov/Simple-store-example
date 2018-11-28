import { Component, Inject } from '@angular/core';
import { DispatcherToken } from '../shared/tokens/dispatch-token';
import { UpdateInputValueAction } from './store/fetch-data-flow.actions';
import { ResponseToken } from './tokens';
import { Observable } from 'rxjs';
import { SearchWikiModel } from './search-wiki.model';

@Component({
  selector: 'app-fetch-data-flow',
  templateUrl: './fetch-data-flow.component.html',
  styleUrls: ['./fetch-data-flow.component.css']
})
export class FetchDataFlowComponent {

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function,
    @Inject(ResponseToken)
    public response$: Observable<SearchWikiModel>
  ) { }

  public saveInStore(htmlElement): void {
    this.dispatcher(new UpdateInputValueAction(htmlElement.target.value));
  }
}
