import {Component, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'chat-footer',
  template: require('./chatFooter.html')
})
export class ChatFooterComponent {
  name: any;
  @Output() onSend: EventEmitter<any> = new EventEmitter(false);

  constructor(private _localStorageService: LocalStorageService) {
    this.name = _localStorageService.get('user');
  }

  send(msgForm: NgForm) {
    const msg = msgForm.value.msg;
    if (!msg) {
      return;
    }
    this.onSend.emit({
      text: msg,
      name: this.name,
      time: new Date()
    });
    msgForm.setValue({msg: null});
  }
}
