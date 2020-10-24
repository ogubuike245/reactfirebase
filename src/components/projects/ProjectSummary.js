import React from "react";
import moment from "moment";

export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-2 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p>{project.body}</p>
        <p>
          POSTED BY {project.firstname} {project.lastname}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
}
