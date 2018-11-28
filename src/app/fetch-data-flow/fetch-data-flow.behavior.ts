import { Injectable, Inject } from '@angular/core';
import { ResponseToken } from './tokens';
import { SearchWikiModel } from './search-wiki.model';
import { Observable } from 'rxjs';
import { FetchDataFlowViewModel } from './view-text/fetch-data-flow.viewmodel';
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
          const red = Math.floor(Math.random() * 255);
          const green = Math.floor(Math.random() * 255);
          const blue = Math.floor(Math.random() * 255);
          const color = `${red},${green},${blue}`;
          console.log(res);
          return {
            title: res.title,
            info: res.info,
            titleColor: color
          } as FetchDataFlowViewModel;
        })
      );
  }
}
