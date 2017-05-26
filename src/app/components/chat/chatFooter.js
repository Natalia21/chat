class ChatFooterController {
  constructor($localStorage) {
    this.$localStorage = $localStorage;
    this.msg = null;
  }

  send() {
    if (!this.msg) {
      return;
    }
    this.onSend({
      msg: {
        name: this.$localStorage.user,
        text: this.msg,
        time: new Date()
      }
    });
    this.msg = null;
  }
}

export const chatFooter = {
  template: require('./chatFooter.html'),
  controller: ChatFooterController,
  bindings: {
    onSend: '&'
  }
};
