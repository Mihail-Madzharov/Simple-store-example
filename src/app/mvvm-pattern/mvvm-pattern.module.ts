import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvvmPatternComponent } from './mvvm-pattern.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MvvmPatternComponent, InputComponent],
  exports: [MvvmPatternComponent ]
})
export class MvvmPatternModule { }
