import { InjectionToken } from '@angular/core';

export const FirstInputToken = new InjectionToken<string>('This will provide value from first input');
export const SecondInputToken = new InjectionToken<string>('This will provide value from second input');
