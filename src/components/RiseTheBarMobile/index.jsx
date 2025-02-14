import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../RiseTheBarMobile/style.scss";

gsap.registerPlugin(ScrollTrigger);

const RiseTheBarMobile = () => {
  const containerRef = useRef(null);
  const imageContainerRef1 = useRef(null);
  const imageContainerRef2 = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !imageContainerRef1.current ||
      !imageContainerRef2.current
    ) {
      return;
    }

    // Pinning the section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom+=400%",
      pin: true,
      pinSpacing: true,
    });

    // Fade out animation for ImageContainerRef1
    gsap.to(imageContainerRef1.current, {
      opacity: 0,
      zIndex: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Horizontal scrolling effect for first image container
    gsap.to(imageRef1.current, {
      xPercent: -100 * (imageRef1.current.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef1.current,
        start: "bottom top",
        end: "+=3000", // Adjusted to ensure the first image container scrolls fully
        scrub: true,
      },
    });

    // Staggered image animation for ImageContainerRef1
    const images1 = gsap.utils.toArray(imageRef1.current.children);
    images1.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          x: 1500,
          opacity: 0,
          scale: 0.8,
          rotation: 10 * (index % 2 === 0 ? 1 : -1),
        },
        {
          x: -1500,
          opacity: 1,
          scale: 1,
          rotation: 10 * (index % 2 === 0 ? 1 : -1),
          scrollTrigger: {
            trigger: imageContainerRef1.current,
            // start: "top+=100%",
            // end: "+=3000",
            scrub: true,
          },
        }
      );
    });

    // Fade in animation for ImageContainerRef2
    gsap.fromTo(
      imageContainerRef2.current,
      { opacity: 0, zIndex: -1 },
      {
        opacity: 1,
        zIndex: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal scrolling effect for second image container
    gsap.to(imageRef2.current, {
      xPercent: -100 * (imageRef2.current.children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef2.current,
        start: "center center", // Ensure the second image container starts after the first one finishes
        end: "+=3000", // Adjusted to align with the first image container's scroll
        scrub: true,
      },
    });

    // Staggered image animation for ImageContainerRef2
    const images2 = gsap.utils.toArray(imageRef2.current.children);
    images2.forEach((image, index) => {
      gsap.fromTo(
        image,
        { x: 1500, opacity: 1, scale: 0.8, rotation: 0 },
        {
          x: 1000,
          opacity: 1,
          scale: 1,
          rotation: 10 * (index % 2 === 0 ? 1 : -1),
          scrollTrigger: {
            trigger: imageContainerRef2.current,
            // start: "top bottom",
            // end: "center center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.killAll(); // Clean-up ScrollTrigger instances
    };
  }, [containerRef, imageContainerRef1, imageContainerRef2]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col mx-auto justify-center items-center w-full h-screen overflow-hidden"
    >
      {/* Image section 1 */}
      <div
        ref={imageContainerRef1}
        className="absolute inset-0 flex items-center flex-col justify-start whitespace-nowrap"
        style={{
          backgroundImage: `url('./landing/half-moon-gradient-red.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center justify-center flex-col pt-20 text-center font-sf text-[42px] leading-tight font-semibold text-black">
          <span> Raise the Bar,</span>
          <span className="flex items-center">
            Y{" "}
            <span>
              <img
                className="w-10 h-8"
                src="./landing/RiseComponent/button-toggle-red.svg"
                alt="Red toggle"
              />
            </span>
            ur Way
          </span>
        </div>
        <div ref={imageRef1} className="flex h-[1200px] items-center">
          {[
            {
              img: "property1_image1",
              text: ["TUNE", "INTO", "YOUR", "VIBE!"],
            },
            { img: "property1_image2", text: ["Swipe.", "Match.", "Connect."] },
            {
              img: "property1_image3",
              text: ["DOWNLOAD.", "AND", "FIND YOUR.", "STRING"],
            },
            {
              img: "property1_image4",
              text: ["PULLTHE", "STRNGS", "OF", "YOUR", "VIBE!"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative h-[550px] w-[300px] transition-transform`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full opacity-100 transition-transform transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
                  {item.text.map((word, indx) => (
                    <span key={indx} className="inline-block">
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image section 2 */}
      <div
        ref={imageContainerRef2}
        className="absolute inset-0 flex items-center flex-col justify-start w-full whitespace-nowrap"
        style={{
          backgroundImage: `url('./landing/half-moon-gradient-blue.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center justify-center flex-col pt-20 text-center font-sf text-[42px] leading-tight font-semibold text-black">
          <span> Raise the Bar,</span>
          <span className="flex items-center">
            Y{" "}
            <span>
              <img
                className="w-10 h-8"
                src="./landing/RiseComponent/button-toggle-blue.svg"
                alt="Red toggle"
              />
            </span>
            ur Way
          </span>
        </div>
        <div ref={imageRef2} className="flex h-full items-center ">
          {[
            {
              img: "property2_image2",
              text: ["DUAL", "DATING", "AND", "NETWORKING"],
            },
            { img: "property2_image1", text: ["Engage", "Your", "Network"] },
            { img: "property2_image3", text: ["Uncover", "your", "network"] },
            {
              img: "property2_image4",
              text: ["Dive into ", "your", "connections"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative h-[550px] w-[300px] transition-transform`}
              style={{
                backgroundImage: `url('./landing/RiseComponent/black-phone.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={`./landing/RiseComponent/${item.img}.png`}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500 group-hover:opacity-0 group-hover:translate-y-10"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-sf text-white leading-[42px] flex flex-col items-left justify-center font-semibold text-[32px] scale-x-[-1] transition-transform duration-500 group-hover:scale-x-[1]">
                  {item.text.map((word, indx) => (
                    <span key={indx} className="inline-block">
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiseTheBarMobile;
