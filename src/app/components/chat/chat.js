import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import Msg from './msg';
import ChatFooter from './chatFooter';
import * as actions from '../../actions/index';

const audio = new Audio('audio/msg.mp3');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.name = reactLocalStorage.get('username');
    this.handleSend = this.handleSend.bind(this);
    this.handleRef = this.handleRef.bind(this);
  }

  componentDidMount() {
    axios.get('fakeChat.json')
      .then(({data: msgs}) => {
        setInterval(() => {
          const randomMsgIndex = Math.floor(Math.random() * msgs.length);
          const msg = msgs[randomMsgIndex];
          this.handleSend(msg.text, msg.name);
          audio.play();
        }, 5000);
      });
  }

  componentDidUpdate() {
    this.scrollToTop();
  }

  handleSend(_msg, _name = this.name) {
    this.props.actions.sendMsg({
      name: _name,
      text: _msg,
      time: new Date()
    });
  }

  handleRef(ref) {
    this.msgsConteiner = ref;
  }

  scrollToTop() {
    this.msgsConteiner.scrollTop = 0;
  }

  render() {
    const {msgsList} = this.props;
    return (
      <div className="chat-container">
        <h2 className="text-center">Chat</h2>
        <div className="chat-wrapper">
          <div
            className="msgs-box"
            ref={this.handleRef}
            >
            {msgsList.map((msg, index) =>
              <Msg
                key={index}
                msg={msg}
                />
            )}
          </div>
          <ChatFooter
            onSend={this.handleSend}
            />
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  msgsList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    msgsList: state.msgsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
