import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ToastMessage {
  message:string
}

@Injectable()
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  toastState = this.toastSubject;

  constructor(@Optional() @SkipSelf() prior: ToastService) {
    if (prior) { return prior; }
    console.log("created toast service")
  }

  activate(message?: string) {
    this.toastSubject.next(<ToastMessage>{ message: message });
  }
}
