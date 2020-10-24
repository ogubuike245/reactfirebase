import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
///THIS IS USE TO CONNECT TO THE REDUX STATE
import { connect } from "react-redux";
// THIS IS USED  TO CONNECT REDUX AND THE FIRESTORE DATABASE
import { firestoreConnect } from "react-redux-firebase";
// THIS IS USED TO CONNECT TWO HIGHER ORDER COMPONENTS
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);

  ///RESTURNING THEARRAY OF ITEMS DIRECTLY FROM FIRESTORE
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};

///MAPPINING THE PROPS FROM THE STATE TO THE FIRESTORE COLLECTION
///AND ALSO CONNECTING THE DATA FROM STATE AND FIRESTORE TO FORM A NEW FILE WITH COMPOSE AND CONNECT FUNCTION
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(Dashboard);
