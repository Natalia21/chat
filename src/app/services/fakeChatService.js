export class FakeChatService {
  constructor($http) {
    this.$http = $http;
  }

  getChatData() {
    return this.$http.get('fakeChat.json');
  }
}
