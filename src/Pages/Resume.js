import React from "react";
import { programmingIcons, toolIcons } from "../Icons";
function Resume() {
    const { c, cpp, csharp, css, html, javascript, latex, matlab, python, react, solidity, tailwind } = programmingIcons;
    const programmingIconArray = [javascript, react, html, css, tailwind, python, matlab, c, cpp, csharp];

    const { aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode } = toolIcons;
    const toolIconArray = [aws, git, github, mongodb, nodejs, npm, postgresql, postman, vscode];
    return (
      <main className="pageMargin">
        <div className="flex flex-col text-center sm:text-start text-2xl sm:text-3xl font-semibold">
          <span className="text-3xl sm:text-4xl mb-4">Technical Skills</span>
          <span className="text-gray-600 dark:text-gray-400">Programming</span>
          <div className="iconGrid">
            {React.Children.toArray(
              programmingIconArray.map((icon) => (
                <div className=" flex flex-col">
                  <img
                    className="max-h-32"
                    src={icon.dark}
                    alt={icon.name}
                  ></img>
                  <span>{icon.name}</span>
                </div>
              ))
            )}
          </div>
                <span className="text-gray-600 dark:text-gray-400">Tools</span>
                <div className="iconGrid">
                    {React.Children.toArray(
                        toolIconArray.map((icon) => (
                            <div className=" flex flex-col">
                                <img
                                    className="max-h-32"
                                    src={icon.dark}
                                    alt={icon.name}
                                ></img>
                                <span>{icon.name}</span>
                            </div>
                        ))
                    )}
                </div>
        </div>
        <div>
          
        </div>
      </main>
    );
}

export default Resume;