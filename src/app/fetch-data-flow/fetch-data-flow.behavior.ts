import { Injectable, Inject } from '@angular/core';
import { ResponseToken } from './tokens';
import { SearchWikiModel } from './search-wiki.model';
import { Observable } from 'rxjs';
import { FetchDataFlowViewModel } from './store/fetch-data-flow.viewmodel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFlowBehavior {

  public fetchDataBehavior$: Observable<FetchDataFlowViewModel>;

  constructor(
    @Inject(ResponseToken)
    private response$: Observable<SearchWikiModel>
  ) {
    this.fetchDataBehavior$ = this.response$
      .pipe(
        map((res: SearchWikiModel) => {

          return {
            information: res,
            isValid: res.title != null,
            titleColor: ''
          } as FetchDataFlowViewModel;
        })
      );
  }
}
