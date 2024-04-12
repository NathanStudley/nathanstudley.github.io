import React from "react";
//Logos
import awsDark from "./assets/icons/AWS-Dark.svg"
import awsLight from "./assets/icons/AWS-Light.svg"
import c from "./assets/icons/C.svg";
import cpp from "./assets/icons/CPP.svg";
import csharp from "./assets/icons/CS.svg";
import css from "./assets/icons/CSS.svg";
import git from "./assets/icons/Git.svg";
import githubDark from "./assets/icons/Github-Dark.svg";
import githubLight from "./assets/icons/Github-Light.svg";
import html from "./assets/icons/HTML.svg";
import javascript from "./assets/icons/JavaScript.svg";
import latexDark from "./assets/icons/LaTeX-Dark.svg";
import latexLight from "./assets/icons/LaTeX-Light.svg";
import matlabDark from "./assets/icons/Matlab-Dark.svg";
import matlabLight from "./assets/icons/Matlab-Light.svg";
import mongodb from "./assets/icons/MongoDB.svg";
import nodejsDark from "./assets/icons/NodeJS-Dark.svg";
import nodejsLight from "./assets/icons/NodeJS-Light.svg";
import npmDark from "./assets/icons/Npm-Dark.svg";
import npmLight from "./assets/icons/Npm-Light.svg";
import postgresqlDark from "./assets/icons/PostgreSQL-Dark.svg";
import postgresqlLight from "./assets/icons/PostgreSQL-Light.svg";
import postman from "./assets/icons/Postman.svg";
import pythonDark from "./assets/icons/Python-Dark.svg";
import pythonLight from "./assets/icons/Python-Light.svg";
import reactDark from "./assets/icons/React-Dark.svg";
import reactLight from "./assets/icons/React-Light.svg";
import solidity from "./assets/icons/Solidity.svg";
import tailwindDark from "./assets/icons/TailwindCSS-Dark.svg";
import tailwindLight from "./assets/icons/TailwindCSS-Light.svg";
import vscodeDark from "./assets/icons/VSCode-Dark.svg";
import vscodeLight from "./assets/icons/VSCode-Light.svg";


//Language Icons
export const programmingIcons = {
    c: { name: "C", dark: c, light: c },
    cpp: { name: "C++", dark: cpp, light: cpp },
    csharp: { name: "C#", dark: csharp, light: csharp },
    css: { name: "CSS", dark: css, light: css },
    html: { name: "HTML", dark: html, light: html },
    javascript: { name: "JavaScript", dark: javascript, light: javascript },
    latex: { name: "LaTeX", dark: latexDark, light: latexLight },
    matlab: { name: "MATLAB", dark: matlabDark, light: matlabLight },
    python: { name: "Python", dark: pythonDark, light: pythonLight },
    react: { name: "React", dark: reactDark, light: reactLight },
    solidity: { name: "Solidity", dark: solidity, light: solidity },
    tailwind: { name: "Tailwind CSS", dark: tailwindDark, light: tailwindLight },
}

export const toolIcons = {
    aws: { dark: awsDark, light: awsLight, name: "AWS" },
    git: { name: "Git", dark: git, light: git },
    github: { name: "GitHub", dark: githubDark, light: githubLight },
    mongodb: { name: "MongoDB", dark: mongodb, light: mongodb },
    nodejs: { name: "Node.js", dark: nodejsDark, light: nodejsLight },
    npm: { name: "NPM", dark: npmDark, light: npmLight },
    postgresql: { name: "PostgreSQL", dark: postgresqlDark, light: postgresqlLight },
    postman: { name: "Postman", dark: postman, light: postman },
    vscode: { name: "VS Code", dark: vscodeDark, light: vscodeLight },
}