import React from "react";

function Experience({company, position, date, location, description}) {
    return (
      <div className="text-gray-600 dark:text-gray-400 py-4 border-b-2 border-gray-600 dark:border-gray-400">
        <div className="text-lg sm:text-xl md:text-2xl font-bold pb-2 text-start">
          <span>
            {position}
          </span>
        </div>
        <div className="experience grid grid-flow-col text-sm sm:text-base md:text-lg font-normal">
          <div className="flex flex-col text-start">
            <span>{company}</span>
            <span>{location}</span>
          </div>
          <div className="flex flex-col text-end">
            <span className="font-semibold">{description}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
}

export default Experience;