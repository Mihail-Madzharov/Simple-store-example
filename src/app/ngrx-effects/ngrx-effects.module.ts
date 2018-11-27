import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxEffectsComponent } from './ngrx-effects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgrxEffectsComponent],
  exports: [NgrxEffectsComponent]
})
export class NgrxEffectsModule { }
