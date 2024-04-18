import React from "react";

/**
 * 
 * @param {[]} icons 
 * @returns 
 */
function IconGrid({ icons }) {
    return (
        <div className="items-grid">
            {React.Children.toArray(
                icons.map((icon) => (
                    <div className="w-16 lg:w-20 2xl:w-24">
                        <img
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