import React from "react";
import { Link } from "react-router-dom";
import { programmingIcons, toolIcons } from "../assets/icons/Icons";
import IconGrid from "../Components/IconGrid";
import { experienceDetails, educationDetails } from "../assets/Details";
import Experience from "../Components/Experience";

function Resume() {
    const { c, cpp, csharp, css, html, javascript, latex, matlab, python, react, solidity, tailwind } = programmingIcons;
    const programmingIconArray = [javascript, react, html, css, tailwind, python, matlab, c, cpp, csharp];

    const { aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode } = toolIcons;
    const toolIconArray = [aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode];
    return (
      <main className="pageMargin flex flex-col gap-4">
        <div className="resumeSection">
          <span className="text-3xl md:text-4xl mb-4">Technical Skills</span>
          <span className="text-gray-600 dark:text-gray-400">Programming</span>
          <IconGrid icons={programmingIconArray} />
          <span className="text-gray-600 dark:text-gray-400">Tools</span>
          <IconGrid icons={toolIconArray} />
        </div>
        <div className="resumeSection">
          <span className="text-3xl md:text-4xl mb-4">Experience</span>
          {React.Children.toArray(
            experienceDetails.map((experience) => (
              <Experience {...experience} />
            ))
          )}
        </div>
        <div className="resumeSection">
          <span className="text-3xl md:text-4xl mb-4">Education</span>
          {React.Children.toArray(
            educationDetails.map((education) => (
              <Experience {...education} />
            ))
          )}
        </div>
        <Link to="./assets/Nathan_Studley_Resume.pdf" target="_blank" download="Nathan_Studley_Resume.pdf" className="underline hover:text-gray-500">PDF download</Link>
      </main>
    );
}

export default Resume;