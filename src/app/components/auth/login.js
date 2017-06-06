import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import {browserHistory} from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {username: ''};
    this.logout();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  logout() {
    reactLocalStorage.set('username', '');
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.username) {
      return;
    }
    reactLocalStorage.set('username', this.state.username);
    browserHistory.push('/chat');
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="login-container">
        <h2 className="text-center">Login</h2>
        <div className="container cf">
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputUsername">
                  Username
                </label>
                <input
                  className="form-control"
                  id="inputUsername"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                  />
              </div>
              <button
                type="submit"
                className="btn btn-default"
                >
                  Submit
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
