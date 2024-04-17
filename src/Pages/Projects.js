import React from "react";
import { projectDetails } from "../assets/Details";
import Project from "../Components/Project";


function Projects() {
    return (
        <main className="pageMargin flex flex-wrap gap-10 justify-center">
            {React.Children.toArray(
                projectDetails.map((project) => (
                    <Project {...project} />
                ))
            )}
        </main>
    );
}    

export default Projects;