import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ReactTyped } from "react-typed";


function Home() {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      "#line1",
      {
        x: "-50%",
        opacity: 0,
        duration: 1.5,
        ease: "power3.easeOut",
      }, "0.5")
      .from(
        "#line2",
        {
          display: "none",
          ease: "power3.easeOut",
        }, ">")
      .to(
        "#cursor1",
        {
          display: "none",
        }, ">0.2")
      .from(
        "#line4",
        {
          display: "none",
          ease: "power3.easeOut",
        },
        ">0.75"
      )
      .from(
        "#line5",
        {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
        },
        ">1"
      )
      .from(
        "#line6",
        {
          x: "-100%",
          opacity: 0,
          duration: 1.5,
        },
        "<0.5"
      );
  }, []);

  return (
    <main className="pageMargin">
      <div className="space-y-1 h-56">
        <h1 id="line1" className="text-4xl md:text-5xl font-bold">
          Hi,
        </h1>
        <h1 id="line2" className="text-4xl md:text-5xl font-bold relative">
          <ReactTyped
            id="firstTyped"
            strings={["I'm <text-colored>Nate</text-colored>"]}
            typeSpeed={50}
            loop={false}
            startWhenVisible={true}
            showCursor={false}
          />
          <span id="cursor1" className="typed-cursor relative">
            |
          </span>
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
        <h1 id="line4" className="text-4xl md:text-5xl font-bold relative">
          <ReactTyped
            className=""
            strings={[
              "I write <text-colored>code</text-colored>",
              "I develop <text-colored>web</text-colored> <text-colored>applications</text-colored>",
              "I engineer <text-colored>cloud</text-colored> solutions",
            ]}
            backDelay={1500}
            typeSpeed={50}
            showCursor={false}
            backSpeed={50}
            smartBackspace={true}
            loop={true}
            startWhenVisible={true}
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
    </main>
  );
}

export default Home;
