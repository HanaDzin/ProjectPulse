import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //stores project ID, null if creating a new, undefined when nothing is selected
    projects: [],
  });

  function handleStartAddingProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddingProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8 bg-[]">
      <Sidebar
        onStartAddProject={handleStartAddingProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
