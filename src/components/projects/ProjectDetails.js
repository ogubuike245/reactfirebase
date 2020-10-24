import React from "react";
import loading from "./1.gif";
import { Redirect } from "react-router-dom";
import moment from "moment";
///THIS IS USE TO CONNECT TO THE REDUX STATE

import { connect } from "react-redux";
// THIS IS USED  TO CONNECT REDUX AND THE FIRESTORE DATABASE
import { firestoreConnect } from "react-redux-firebase";
// THIS IS USED TO CONNECT TWO HIGHER ORDER COMPONENTS
import { compose } from "redux";

function ProjectDetails(props) {
  // console.log(props);
  // const id = props.match.params.id;
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-2">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 gery-text">
            <div>
              POSTED BY {project.firstname} &nbsp;
              {project.lastname}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <h1>LOADING PROJECT</h1>
        <img src={loading} width="150px" height="150px" alt="LOADING" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
