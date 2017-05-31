export interface Msg {
  text: string;
  name: string;
  time: Date;
}

export interface Action {
  type: string;
  msg: Msg;
}
