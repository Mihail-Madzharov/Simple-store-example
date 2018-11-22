import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvvmPatternComponent } from './mvvm-pattern/mvvm-pattern.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MvvmPatternComponent],
  exports: [MvvmPatternComponent]
})
export class MvvmPatternModule { }
