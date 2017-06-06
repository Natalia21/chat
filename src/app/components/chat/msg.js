import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Msg extends Component {
  render() {
    const {msg} = this.props;
    return (
      <div className="msg-wrapper">
        <span className="user col-sm">
          {msg.name}
        </span>
        <span className="time">
          {moment(msg.time).format('HH:mm')}
        </span>
        <div className="msg">
          {msg.text}
        </div>
      </div>
    );
  }
}

Msg.propTypes = {
  msg: PropTypes.object.isRequired
};

export default Msg;
