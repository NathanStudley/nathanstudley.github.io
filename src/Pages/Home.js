import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ReactTyped, Typed } from "react-typed";


function Home() { 

    
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from("#line1", {
            y: "200%",
            opacity: 0,
            duration: 1.5,
        }, "1")
        .from("#line2", {
            opacity: 0,
            duration: 1.5,
        }, ">")
        .from("#line3", {
            opacity: 0,
            duration: 1.5,
        }, "<0.5")
        .from("#line4", {
            y: "125%",
            opacity: 0,
            duration: 2,
        }, ">")
        .from("#line5", {
            x: "-100%",
            opacity: 0,
            duration: 3,
        }, ">1")
        .from("#line6", {
            x: "-100%",
            opacity: 0,
            duration: 3,
        }, "<0.5");
    }, []);


    return (
      <div className="pageMargin">
        <div className="space-y-1 h-44">
          <h1 id="line1" className="text-4xl md:text-5xl font-bold">
            Hi,
          </h1>
          <div className="flex space-x-1">
            <h1 id="line2" className="text-4xl md:text-5xl font-bold">
              I'm&nbsp;
            </h1>
            <h1 id="line3" className="text-4xl md:text-5xl font-bold">
              <text-colored>Nate</text-colored>
            </h1>
          </div>
          <h1 id="line4" className="text-4xl md:text-5xl font-bold relative">
            I{" "}
            <ReactTyped
              className=""
              strings={[
                "write <text-colored>code</text-colored>",
                "develop <text-colored>web</text-colored> <text-colored>applications</text-colored>",
                "engineer <text-colored>cloud</text-colored> solutions",
              ]}
              startDelay={400}
              backDelay={2000}
              typeSpeed={50}
              showCursor={false}
              backSpeed={50}
              smartBackspace={true}
              loop={true}
            />
            <span className="typed-cursor relative">|</span>
            <style>{`
            @keyframes blink {
              0% { opacity: 1; }
              50% { opacity: 0; }
              100% { opacity: 1; }
            }
            .typed-cursor {
              animation: blink 0.8s infinite;
            }
          `}</style>
          </h1>
        </div>
        <div className="place-items-start place-content-center h-full flex-col flex text-2xl font-semibold space-y-2">
          <NavLink id="line5" to="/projects">
            Check out some cool stuff &#10095;
          </NavLink>
          <NavLink id="line6" to="/contact">
            Get in touch &#10095;
          </NavLink>
        </div>
      </div>
    );
}

export default Home;