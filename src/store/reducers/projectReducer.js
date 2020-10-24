const initState = {
  projects: [
    {
      id: 1,
      title: "OGUBUIKE EMEJURU",
      content: " MECHANICAL ENGINEERING STUDENT",
      body: "KAMPALA INTERNATIONAL UNIVERSITY",
    },
    {
      id: 2,
      title: "KINIKA EMEJURU",
      content: "FRONT END DEVELOPER",
      body: "BOOM AFRICANA",
    },
    {
      id: 3,
      title: "BOBBY PRAWG",
      content: "CYBER SECURITY ENGINEER",
      body: "TYCOON",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
