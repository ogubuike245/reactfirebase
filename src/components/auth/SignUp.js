import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

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
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
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
            <button className="btn pink lghten-1 z-depth-2 ">SIGN UP</button>
            <div className="white-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
