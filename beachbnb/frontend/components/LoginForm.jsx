import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal())
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.currentTarget.value })
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        Log in
        <br />
        <input type="text"  //revisit: change to email?
          value={this.state.email}
          onChange={this.update("email")}
          placeholder="Email"
        />
        <input type="password"
          value={this.state.password}
          onChange={this.update("password")}
          placeholder="Password"
        />
        <input type="submit" className="session-submit" value="Continue" />
        {this.renderErrors()}
      </form>
    )
  }
}

export default LoginForm