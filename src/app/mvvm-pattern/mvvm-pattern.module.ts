import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvvmPatternComponent } from './mvvm-pattern.component';
import { SharedModule } from '../shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MvvmPatternComponent],
})
export class MvvmPatternModule { }
