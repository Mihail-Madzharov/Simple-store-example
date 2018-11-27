import { InjectionToken } from '@angular/core';

export const FirstValueToken = new InjectionToken<string>('This will provide first value');
export const SecondValueToken = new InjectionToken<string>('This will provide second value');
