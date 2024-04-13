import React from "react";

/**
 * 
 * @param {[]} icons 
 * @returns 
 */
function IconGrid({icons}) {
    return (
        <div className="iconGrid">
            {React.Children.toArray(
                icons.map((icon) => (
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
    );
}

export default IconGrid;