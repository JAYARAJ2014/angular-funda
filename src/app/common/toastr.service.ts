import { InjectionToken } from '@angular/core';
export let TOASTR_TOKEN = new InjectionToken<IToaster>('toastr');
export interface IToaster {
  success(message: string, title?: string);
  info(message: string, title?: string);
  warning(message: string, title?: string);
  error(message: string, title?: string);
}
