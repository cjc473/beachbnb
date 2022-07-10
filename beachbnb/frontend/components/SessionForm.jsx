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
    console.log("props", this.props)
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal());
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


  // render() {
  //   return (
  //     <div className="login-form-container">
  //       <form onSubmit={this.handleSubmit} className="login-form-box">
  //         Welcome to BenchBnB!
  //         <br />
  //         Please {this.props.formType} or {this.props.otherForm}
  //         <div onClick={this.props.closeModal} className="close-x">X</div>
  //         {this.renderErrors()}
  //         <div className="login-form">
  //           <br />
  //           <label>Username:
  //             <input type="text"
  //               value={this.state.username}
  //               onChange={this.update('username')}
  //               className="login-input"
  //             />
  //           </label>
  //           <br />
  //           <label>Password:
  //             <input type="password"
  //               value={this.state.password}
  //               onChange={this.update('password')}
  //               className="login-input"
  //             />
  //           </label>
  //           <br />
  //           <input className="session-submit" type="submit" value={this.props.formType} />
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }

}

export default SessionForm