import React from "react";

function ProjectDetails(props) {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-2">
        <div className="card-content">
          <span className="card-title">PROJECT TITLE - {id}</span>
          <p>YEAHHHHHHHHHHHH</p>
        </div>
        <div className="card-action grey lighten-4 gery-text">
          <div>POSTED BY OGUBUIKE</div>
          <div>2020</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
