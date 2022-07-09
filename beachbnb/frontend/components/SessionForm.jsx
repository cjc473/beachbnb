import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    )
  }

  render() {

    const loginForm = () => {
      return (
        <form onSubmit={this.handleSubmit}>
          Login Form
          <input type="text" 
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <input type="submit" value="Sign In" />
        </form>
      )
    }

    const signupForm = () => {
      return (
        <form onSubmit={this.handleSubmit}>
          Signup Form
          <input type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            placeholder="First Name"
          />
          <input type="text"
            value={this.state.last_name}
            onChange={this.update("last_name")}
            placeholder="Last Name"
          />
          <input type="text"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
          <input type="submit" value="Sign In" />
        </form>
      )
    }

    return (this.props.formType === "login") ? loginForm() : signupForm();
  }

}

export default SessionForm