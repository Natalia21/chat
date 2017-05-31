import {Component, Input} from '@angular/core';
import {Msg} from '../../interfaces';

@Component({
  selector: 'msg',
  template: require('./msg.html')
})
export class MsgComponent {
    @Input() msg: Msg;
}
