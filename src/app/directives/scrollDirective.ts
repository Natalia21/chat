import {Directive, ElementRef, Input} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Msg} from '../interfaces';

@Directive({selector: '[schrollBottom]'})
export class SchrollBottomDirective {
  @Input('schrollBottom') msgsList: Observable<Msg[]>;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.msgsList.subscribe(
      value => {
        this.el.nativeElement.scrollTop = 0;
      }
    );
  }
}
