import React from "react";
import { programmingIcons, toolIcons } from "../Icons";
import IconGrid from "../Components/IconGrid";
function Resume() {
    const { c, cpp, csharp, css, html, javascript, latex, matlab, python, react, solidity, tailwind } = programmingIcons;
    const programmingIconArray = [javascript, react, html, css, tailwind, python, matlab, c, cpp, csharp];

    const { aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode } = toolIcons;
    const toolIconArray = [aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode];
    return (
      <main className="pageMargin flex flex-col gap-4">
        <div className="resumeSection">
          <span className="text-3xl sm:text-4xl mb-4">Technical Skills</span>
          <span className="text-gray-600 dark:text-gray-400">Programming</span>
          <IconGrid icons={programmingIconArray} />
          <span className="text-gray-600 dark:text-gray-400">Tools</span>
          <IconGrid icons={toolIconArray} />
        </div>
        <div className="resumeSection">
          <span className="text-3xl sm:text-4xl mb-4">Experience</span>
        </div>
        <div className="resumeSection">
          <span className="text-3xl sm:text-4xl mb-4">Education</span>
        </div>
      </main>
    );
}

export default Resume;