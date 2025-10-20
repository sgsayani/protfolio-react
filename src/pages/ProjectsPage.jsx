import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Mywork from "../components/Mywork/Mywork";

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <Mywork showAllProjects={true} />
    </div>
  );
};

export default ProjectsPage;
