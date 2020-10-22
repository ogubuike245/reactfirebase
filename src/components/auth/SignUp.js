import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="pink">
          <h5 className="white-text text-darken-3 center">SIGN UP</h5>
          <div className="input-field">
            <label htmlFor="email" className="white-text">
              EMAIL
            </label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname" className="white-text">
              FIRST NAME
            </label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname" className="white-text">
              LAST NAME
            </label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="white-text">
              PASSWORD
            </label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field center">
            <button className="btn pink lghten-1 z-depth-2 ">LOGIN</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
