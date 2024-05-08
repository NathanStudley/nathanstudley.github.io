import React from "react";
import { Link } from "react-router-dom";
import { programmingIcons, toolIcons } from "../assets/icons/Icons";
import IconGrid from "../Components/IconGrid";
import { experienceDetails, educationDetails, certificationDetails } from "../assets/Details";
import Experience from "../Components/Experience";
import resume from "../assets/Nathan_Studley_Resume.pdf";

function Resume() {
  function openResume() {
    console.log(1);
    window.open(resume);
    }

    const { c, cpp, csharp, css, html, javascript, matlab, python, react, tailwind } = programmingIcons;
    const programmingIconArray = [javascript, react, html, css, tailwind, python, matlab, c, cpp, csharp];

    const { aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode } = toolIcons;
    const toolIconArray = [aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode];
    return (
      <main className="pageMargin flex flex-col gap-4">
        <div className="resumeSection">
          <span className="text-3xl md:text-4xl mb-4">Technical Skills</span>
          <span className="text-light">Programming</span>
          <IconGrid icons={programmingIconArray} />
          <span className="text-light">Tools</span>
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
            educationDetails.map((education) => <Experience {...education} />)
          )}
        </div>
        <div className="resumeSection">
          <span className="text-3xl md:text-4xl mb-4">Certifications</span>
          {React.Children.toArray(
            certificationDetails.map((certification) => (
              <div className="text-light py-4 border-b-2">
                <div className="text-lg sm:text-xl md:text-2xl font-bold pb-2 text-start">
                  <span>{certification.name}</span>
                </div>
                <div className="grid grid-flow-col text-sm sm:text-base md:text-lg font-normal">
                    <span className="text-start">{certification.company}</span>
                    <span className="text-end">{certification.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <Link onClick={openResume} className="underline links text-center pt-8">
          PDF Version
        </Link>
      </main>
    );
}

export default Resume;