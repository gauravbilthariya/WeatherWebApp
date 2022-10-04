import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({selector: '[base]'})
export class BaseComponent implements OnDestroy {
  protected destroyed$ = new Subject<void>();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
