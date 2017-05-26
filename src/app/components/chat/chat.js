const audio = new Audio('audio/msg.mp3');

class ChatController {
  /** @ngInject */
  constructor($interval, FakeChatService) {
    this.$interval = $interval;
    this.FakeChatService = FakeChatService;
    this.msgsList = [];
    this.msg = null;
    this.getChatData();
  }

  send(msg) {
    this.msgsList.push(msg);
  }

  getChatData() {
    this.FakeChatService.getChatData().then(({data}) => {
      this.$interval(() => {
        const randomMsgIndex = Math.floor(Math.random() * data.length);
        const msg = data[randomMsgIndex];
        msg.time = new Date();
        this.send(msg);
        audio.play();
      }, 5000);
    });
  }
}

export const chat = {
  template: require('./chat.html'),
  controller: ChatController
};
