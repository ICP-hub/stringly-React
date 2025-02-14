import React, { useState, useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../components/HeroMobile/mobileStyle.scss";

gsap.registerPlugin(ScrollTrigger);

const HeroMobile = () => {
  const [sLogoLarge, setSLogoLarge] = useState(false);
  const [sLogoColored, setSLogoColored] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const [imageRingUp, setImageRingUp] = useState(false);
  const [circleImageRingClose, setCircleImageClose] = useState(false);
  const [heartVisible1, setHeartVisible1] = useState(false);
  const [heartVisible2, setHeartVisible2] = useState(false);
  const [heartVisible3, setHeartVisible3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsMobile(width <= 968);
      setIsConditionMet(width === 1440 && height === 900);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSLogoLarge(true);
    }, 3000);
    const colorTimer = setTimeout(() => {
      setImageTransition(true);
      setTimeout(() => {
        setSLogoColored(true);
      }, 100);
    }, 4500);

    const heart1 = setTimeout(() => {
      setHeartVisible1(true);
    }, 4900);
    const heart2 = setTimeout(() => {
      setHeartVisible1(false);
      setHeartVisible2(true);
    }, 5900);
    const heart3 = setTimeout(() => {
      setHeartVisible3(true);
    }, 6500);

    const imageRingTimer = setTimeout(() => {
      setImageRingUp(true);
    }, 7400);

    const circleImageTimer = setTimeout(() => {
      setCircleImageClose(true);
    }, 8300);

    return () => {
      clearTimeout(timer);
      clearTimeout(colorTimer);
      clearTimeout(imageRingTimer);
      clearTimeout(circleImageTimer);
      clearTimeout(heart1);
      clearTimeout(heart2);
      clearTimeout(heart3);
    };
  }, []);

  return (
    <div className="bg-gray-300">
      {/* Your content here */}
      <img
        src="./landing/heroImageMobile.png"
        alt="Background"
        className="object-cover  w-screen rounded-none object-contain"
      />
      <div
        className={`absolute text-white left-10  top-32 md:top-60 z-[10] text-start  cursor-pointer flex flex-col leading-tight `}
      >
        <div className="heading relative  overflow-hidden leading-tight inline-block">
          <p className="font-sf font-semibold text-white text-[34px] md:text-[52px] lg:text-[32px]">
            String your Vibe
          </p>
        </div>
        <div className="relative text-[26px] overflow-hidden inline-block">
          <p className="font-sf text-white md:text-[32px] lg:text-[22px] lg:text-[42px]">
            Date & Network
          </p>
        </div>
      </div>
      <div>
        <img
          src="./landing/Rectangle_Ring.png"
          className={`rectangle-ring-image absolute  ${
            imageRingUp && "image-ring"
          }`}
        />
        <div
          className={`${
            imageRingUp && "image-ring"
          } flex justify-between flex-col  text-white absolute ring-text-container`}
        >
          <h2 className="font-sf text-[10px] font-semibold">
            Michael Smith, 25
          </h2>
          <p className="font-sf text-[7px]  font-medium">
            Lives in Portland, Illinois
          </p>
          <p className="font-sf text-[7px] font-regular">11 miles away</p>
        </div>
        <div
          className={`${
            sLogoLarge ? "s-logo" : ""
          } rounded-full absolute  h-7 w-9 md:h-10 md:w-12 sLarge ${
            imageRingUp && "image-ring"
          }`}
        >
          {!sLogoColored ? (
            <img
              src="./landing/s-logo.png"
              className={`text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-5 w-7 ${
                imageTransition
                  ? "image-transition"
                  : "image-transition-visible"
              }`}
              onLoad={() => setImageTransition(false)} // Reset transition once image is loaded
            />
          ) : (
            <>
              <img
                src="./landing/s-logo-color.png"
                className={`text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-5 w-7 ${
                  imageTransition
                    ? "image-transition"
                    : "image-transition-visible"
                }`}
                onLoad={() => setImageTransition(false)} // Reset transition once image is loaded
              />
              <img
                src="./landing/heart.svg"
                className={`absolute top-[-20px] left-[20px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-[20px] w-[20px] ${
                  heartVisible1
                    ? "heart-transition"
                    : "heart-transition-visible"
                } `}
              />
              <img
                src="./landing/heart.svg"
                className={`absolute top-[-20px] left-[20px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-[20px]  w-[20px]  ${
                  heartVisible2
                    ? "heart-transition"
                    : "heart-transition-visible"
                } `}
              />
              <img
                src="./landing/heart.svg"
                className={`absolute top-[-20px] left-[5px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-[20px]  w-[20px]  scale-x-[-1] ${
                  heartVisible3
                    ? "heart-transition"
                    : "heart-transition-visible"
                }`}
              />
            </>
          )}
        </div>
      </div>
      <div className={`${circleImageRingClose ? "" : "opacity-0"}`}>
        <div
          className={` absolute left-ring ${
            circleImageRingClose && "left-circle-ring"
          }`}
        >
          <img src="./landing/left-circle-desktop.png" alt="left-circle-Ring" />
        </div>
        <div
          className={` absolute right-ring ${
            circleImageRingClose && "right-circle-ring"
          }`}
        >
          <img
            src="./landing/right-circle-desktop.png"
            alt="right-circle-Ring"
          />
        </div>
        <div
          className={`absolute match ${circleImageRingClose && "match-text"}`}
        >
          <p className="text-[28px] font-semibold leading-[60px] text-white font-sf">
            It’s a match!
          </p>

          <div className="animated-border-button mt-8 animated-button rounded-xl p-[2.5px] hover:scale-105 transition-all duration-200">
            <button className=" bg-white text-[16px] font-sf text-black px-6 py-3 hover:bg-purple-100 w-38 rounded-xl">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
