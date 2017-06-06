import {combineReducers} from 'redux';

const msgsList = (state = [], action) => {
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

const rootReducer = combineReducers({
  msgsList
});

export default rootReducer;
