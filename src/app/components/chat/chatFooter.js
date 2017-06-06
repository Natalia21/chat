import React, {Component, PropTypes} from 'react';

class ChatFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {msg: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.msg) {
      return;
    }
    this.props.onSend(this.state.msg);
    this.setState({msg: ''});
  }

  handleChange(event) {
    this.setState({msg: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            value={this.state.msg}
            onChange={this.handleChange}
            placeholder="Enter message..."
            />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          >
            Send
        </button>
      </form>
    );
  }
}

ChatFooter.propTypes = {
  onSend: PropTypes.func.isRequired
};

export default ChatFooter;
