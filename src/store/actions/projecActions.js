// export const createProject = (project) => {
//     return {
//       type: "ADD_PROJECT",
//       project: project,
//     };
//   };

export const createProject = (project) => (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const fireStore = getFirestore();
  const profile = getState().firebase.profile;
  const authorid = getState().firebase.auth.uid;

  fireStore
    .collection("projects")
    .add({
      ...project,
      firstname: profile.firstname,
      lastname: profile.lastname,
      authorid: authorid,
      createdAt: new Date(),
    })
    .then(() =>
      dispatch({
        type: "CREATE_PROJECT",
        project,
      })
    )
    .catch((err) =>
      dispatch({
        type: "CREATE_PROJECT_ERROR",
        err,
      })
    );
};
