import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';
import * as actions from '../../actions/index';
import {FakeChatService} from '../../services/fakeChatService';
import {Msg} from '../../interfaces';

const audio = new Audio('audio/msg.mp3');

@Component({
  selector: 'chat',
  template: require('./chat.html'),
  providers: [FakeChatService]
})
export class ChatComponent {
  msgsList: Observable<Msg[]>;

  constructor(
    public store: Store<Msg[]>,
    private _FakeChatService: FakeChatService
  ) {
    this.msgsList = store.select('msgsList');
  }

  ngOnInit() {
    this._FakeChatService.getChatData().subscribe(
      msgs => {
        setInterval(() => {
          const randomMsgIndex = Math.floor(Math.random() * msgs.length);
          const msg = msgs[randomMsgIndex];
          this.send(msg);
          audio.play();
        }, 5000);
      }
    )
  }

  send(msg: Msg) {
    this.store.dispatch(actions.sendMsg(msg));
  }
}
