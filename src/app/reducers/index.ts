import {StoreModule, combineReducers} from '@ngrx/store';
import {Msg, Action} from '../interfaces';

const reducer = (state: Msg[] = [], action: Action) => {
  switch (action.type) {
    case 'SEND_MSG':
      return [
        action.msg,
        ...state
      ];

    default:
      return state;
  }
};
export const store = StoreModule.provideStore({msgsList: reducer});
