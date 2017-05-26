class MsgController {

}

export const msg = {
  template: require('./msg.html'),
  controller: MsgController,
  bindings: {
    msg: '<'
  }
};
