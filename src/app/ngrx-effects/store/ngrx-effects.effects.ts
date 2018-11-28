import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { UpdateNgrxInputValueAction, NgrxEffectActions, UpdateNgrxLabelBackgroundColor } from './ngrx-effects.actions';
import { Actions, ofType, Effect } from '@ngrx/effects';

@Injectable()
export class NgrxEffectsEffect {

    @Effect()
    changeColor$ = this.action$
        .pipe(
            ofType<UpdateNgrxInputValueAction>(NgrxEffectActions.UpdateNgrxInputValue),
            map(action => {
                const red = Math.floor(Math.random() * 255);
                const green = Math.floor(Math.random() * 255);
                const blue = Math.floor(Math.random() * 255);
                const color = `${red},${green},${blue}`;
                return new UpdateNgrxLabelBackgroundColor(color);
            })
        );

    constructor(private action$: Actions) { }
}
