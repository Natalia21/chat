import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Msg} from '../interfaces';

@Injectable()
export class FakeChatService {
  constructor (private _http: Http) {}

  getChatData(): Observable<Msg[]> {
    return this._http.get('fakeChat.json')
                     .map(this.extractData);
  }

  extractData(res: Response) {
    return res.json();
  }
} 
