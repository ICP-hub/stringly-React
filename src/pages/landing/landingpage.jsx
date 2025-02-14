import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdPrivacyTip } from "react-icons/md";
import CarouselCoustom from "../../components/CarouselCoustom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../pages/landing/landingPage.scss";
import RiseTheBar from "../../components/RiseTheBar";
import HeroMobile from "../../components/HeroMobile";
import RiseTheBarMobile from "../../components/RiseTheBarMobile";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const Landingpage = () => {
  const [hovered, setHovered] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [hovered1, setHovered1] = useState([false, false, false]);
  const [hovered2, setHovered2] = useState([false, false]);
  const [isConditionMet, setIsConditionMet] = useState(false);
  const [sLogoLarge, setSLogoLarge] = useState(false);
  const [sLogoColored, setSLogoColored] = useState(false);
  const [imageTransition, setImageTransition] = useState(false);
  const [imageRingUp, setImageRingUp] = useState(false);
  const [circleImageRingClose, setCircleImageClose] = useState(false);
  const [heartVisible1, setHeartVisible1] = useState(false);
  const [heartVisible2, setHeartVisible2] = useState(false);
  const [heartVisible3, setHeartVisible3] = useState(false);
  const [downladBtnApper, setDownladBtnApper] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(width > 1024);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // const [scaleFactor, setScaleFactor] = useState(1);
  // const [scrollCount, setScrollCount] = useState(0);

  const handleHover1 = (index) => {
    if (!hovered1[index]) {
      const newHovered = [...hovered1];
      newHovered[index] = true;
      setHovered1(newHovered);
    }
  };

  const handleHover = (section) => {
    setHovered(section);
  };

  const handleHover2 = (index) => {
    if (!hovered2[index]) {
      const newHovered = [...hovered2];
      newHovered[index] = true;
      setHovered2(newHovered);
    }
  };

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

  // useEffect for match section in hero page
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
    }, 8000);

    const downloadBtn = setTimeout(() => {
      setDownladBtnApper(true);
    }, 9500);

    return () => {
      clearTimeout(timer);
      clearTimeout(colorTimer);
      clearTimeout(imageRingTimer);
      clearTimeout(circleImageTimer);
      clearTimeout(heart1);
      clearTimeout(heart2);
      clearTimeout(heart3);
      clearInterval(downloadBtn);
    };
  }, []);

  //useEffect for checking screen size large screen
  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        setIsDesktop(newWidth > 1024);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="relative w-full md:mx-auto flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div key={isDesktop ? "desktop" : "mobile"}>
        {!isDesktop ? (
          <HeroMobile />
        ) : (
          <>
            <div className="relative overflow-hidden w-screen ">
              <img
                src="./landing/heroImageBanner.png"
                alt="Background"
                className="object-cover w-screen  object-contain"
              />
              <div
                // className="absolute w-[950px] text-white left-1/2 top-[116px] transform -translate-x-1/3 -translate-y-1/3 z-[10] text-start p-20 cursor-pointer flex flex-col"
                className={`absolute text-white left-[-40px] bottom-[calc(116px-95px)] lg:bottom-[40px] xl:bottom-[120px] z-[10] text-start p-20 cursor-pointer flex flex-col leading-tight vibe-text`}
              >
                <div className="relative overflow-hidden leading-tight inline-block">
                  <p
                    className={`font-sf font-semibold text-white text-[42px] lg:text-[52px] xl:text-[72px] ${
                      isConditionMet ? "!text-[52px]" : ""
                    } `}
                    div
                  >
                    String your Vibe
                  </p>
                </div>
                <div className="relative overflow-hidden inline-block">
                  <p className="font-sf text-white text-[22px] lg:text-[37px]">
                    Date & Network
                  </p>
                </div>
              </div>
              <div className="">
                <img
                  src="./landing/Rectangle_Ring.png"
                  className={`rectangle-ring-image absolute ${
                    imageRingUp && "image-ring"
                  }`}
                />
                <div
                  className={`${
                    imageRingUp && "image-ring"
                  } flex justify-between text-white absolute ring-text-container`}
                >
                  <div className="">
                    <h2
                      className={`font-sf text-[24px] xl:text-[34px] leading-[34px] font-semibold ${
                        isConditionMet ? "text-[10px]" : ""
                      }`}
                    >
                      Michael Smith, 25
                    </h2>
                    <p
                      className={`font-sf text-[18px] xl:text-[28px] leading-[28px] font-medium ${
                        isConditionMet ? "text-[22px]" : ""
                      }`}
                    >
                      Lives in Portland, Illinois
                    </p>
                    <p className="font-sf text-[14px] xl:text-[30px] leading-[14px] font-regular">
                      11 miles away
                    </p>
                  </div>
                  <div
                    className={`${
                      sLogoLarge ? "s-logo" : ""
                    } rounded-full absolute h-16 w-18 sLarge `}
                  >
                    {!sLogoColored ? (
                      <img
                        src="./landing/s-logo.png"
                        className={`text-[36px] font-bold italic text-center flex justify-center items-center h-full w-full ${
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
                          className={`text-[36px] font-bold italic text-center flex justify-center items-center h-full w-full ${
                            imageTransition
                              ? "image-transition"
                              : "image-transition-visible"
                          }`}
                          onLoad={() => setImageTransition(false)} // Reset transition once image is loaded
                        />
                        <img
                          src="./landing/heart.svg"
                          className={`absolute top-[-20px] left-[60px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-7 w-7 ${
                            heartVisible1
                              ? "heart-transition"
                              : "heart-transition-visible"
                          } `}
                        />
                        <img
                          src="./landing/heart.svg"
                          className={`absolute top-[-20px] left-[60px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-7 w-7 ${
                            heartVisible2
                              ? "heart-transition"
                              : "heart-transition-visible"
                          } `}
                        />
                        <img
                          src="./landing/heart.svg"
                          className={`absolute top-[-20px] left-[-15px] text-[36px] pl-2 font-bold italic text-center flex justify-center items-center h-7 w-7 scale-x-[-1] ${
                            heartVisible3
                              ? "heart-transition"
                              : "heart-transition-visible"
                          } `}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={`${circleImageRingClose ? "" : "opacity-0"}`}>
                <div
                  className={` absolute left-ring ${
                    circleImageRingClose && "left-circle-ring"
                  }`}
                >
                  <img
                    src="./landing/left-circle-desktop.png"
                    alt="left-circle-Ring"
                  />
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
                  className={`absolute match ${
                    circleImageRingClose && "match-text"
                  }`}
                >
                  <p className="text-[58px] font-semibold leading-[60px] text-white font-sf">
                    It’s a match!
                  </p>
                </div>
                <div
                  className={`absolute animated-button animated-border-button rounded-xl p-1 hover:scale-105 transition-all duration-20 ${
                    downladBtnApper ? "downloadBtn" : ""
                  }`}
                >
                  <button className=" bg-white text-[16px] lg:text-[24px] xl:text-[32px] font-sf text-black px-6 py-3 hover:bg-purple-100 w-38 rounded-xl">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Rise the bar component */}
      {/* <div>
        {isDesktop ? <RiseTheBar /> : <RiseTheBarMobile />}
        <RefreshOnMount condition={isMobile} />
      </div> */}
      {isDesktop ? <RiseTheBar /> : <RiseTheBarMobile />}

      <div className="px-[20px] md:px-0 text-center w-[310px] md:w-auto mt-16 lg:mb-10">
        <h2 className="text-[30px]  lg:text-[48px] font-bold md:font-semibold font-sf leading-[38px] mb-2 md:mb-6">
          Discover Our Unique Features
        </h2>
        <p className="mt-2 text-[14px] md:text-[20px] font-regular leading-[24px]">
          Experience unmatched privacy and secure connections today.
        </p>
      </div>
      <div className="mt-6 md:mt-5 lg:mt-0 w-full">
        <CarouselCoustom />
      </div>
      {/* Connecting Section */}
      <div className="px-[20px] md:px-0 text-center w-[310px] md:w-auto mt-3 md:mt-16 lg:mb-10">
        <h2 className="text-[30px]  lg:text-[48px] font-bold md:font-semibold font-sf leading-[38px] mb-2 md:mb-4">
          Connecting You With Purpose
        </h2>
        <p className="mt-2 text-[14px] md:text-[20px] font-regular leading-[24px]">
          A unique blend of dating and networking experiences.
        </p>
      </div>
      {/* Group for All Images */}
      {isMobile ? (
        <div
          ref={inViewRef}
          className="max-w-[360px]-sm-md lg:w-[90%] xl:w-full mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4 lg:px-0"
        >
          {/* Images */}
          {["Firefly.png", "Rectangle 4.png", "kiss.png"].map((src, index) => (
            <div
              key={index}
              className={`relative w-full lg:w-full h-[300px] rounded-xl overflow-hidden bg-gray-800 `}
            >
              <img
                src={`./landing/${src}`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover opacity-[0.6]"
              />
              <div
                className={`absolute ref={inViewRef} inset-0 flex items-center p-6 md:px-28 transform ${
                  inView
                    ? "translate-x-0 bg-dark-gradient"
                    : "translate-x-[-100%]"
                } transition-all duration-1000 delay-${index * 200}`}
              >
                <div className="text-white">
                  <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">
                    {index === 0
                      ? "Elevate Your Networking Experience"
                      : index === 1
                      ? "Your Journey Begins Here"
                      : "Unmatched Privacy and Security"}
                  </h2>
                  <p className="mt-2 text-white-600 font-roboto font-light leading-[24px]">
                    Experience connections like never before with Stringly.
                  </p>
                  <a href="https://tally.so/r/waD9X9">
                    <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:scale-105 transition-all duration-200">
                      Join
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-[360px]-sm-md lg:w-[90%] xl:w-full mx-auto flex flex-col items-center justify-center mt-8 gap-4 px-4 lg:px-0 xl:px-16 2xl:px-0">
          {/* Top Image with Hover Effect (Profile Image) */}
          <div
            className={`relative w-full lg:w-full h-[300px] rounded-xl lg:rounded-tl-[12px] lg:rounded-tr-[12px] overflow-hidden bg-gray-800 md:mb-4`}
          >
            <img
              src="./landing/Firefly.png"
              alt="Profile Image"
              className="w-full md:w-full h-full object-cover opacity-[0.6]"
            />
            <div
              className={`absolute inset-0 flex md:w-[600px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${
                isMobile
                  ? hovered1[0]
                    ? "hovered"
                    : ""
                  : hovered2[0]
                  ? "hovered"
                  : ""
              }`}
              onMouseEnter={() =>
                isMobile ? handleHover1(0) : handleHover2(0)
              }
            >
              <div className={`text-white child`}>
                <h2 className="text-[32px] leading-[38px] font-semibold leading-tight font-roboto font-bold">
                  Elevate Your Networking <br /> Experience
                </h2>
                <p className="mt-2 text-white-600 font-roboto font-light leading-[24px]">
                  Experience connections like never before with Stringly.
                </p>
                <a href="https://tally.so/r/waD9X9">
                  <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:scale-105 transition-all duration-200 hover:bg-black hover:text-white">
                    Join
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Flex Container for Left, Middle, and Right Images */}
          <div className={`w-full lg:flex justify-between gap-4  lg:w-full`}>
            {/* Left Image with Hover Effect (Hug Image) */}
            <div
              className={`relative mb-8 w-full lg:w-[680px] h-[340px] rounded-xl lg:rounded-bl-[12px] overflow-hidden bg-gradient-to-br from-black via-[#000000] to-[#1a1a1a] md:mr-4`}
            >
              <img
                src="./landing/Rectangle 4.png"
                alt="Hug Image"
                className="w-full h-full object-cover opacity-[0.6]"
              />
              <div
                className={`absolute inset-0 flex items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${
                  isMobile
                    ? hovered1[1]
                      ? "hovered"
                      : ""
                    : hovered2[0]
                    ? "hovered"
                    : ""
                }`}
                onMouseEnter={() =>
                  isMobile ? handleHover1(1) : handleHover2(0)
                }
              >
                <div className="text-white child">
                  <h2 className="text-[32px] leading-[38px] font-semibold font-roboto font-bold">
                    Your Journey Begins Here
                  </h2>
                  <p className="text-lg mt-2 font-roboto font-light leading-[24px]">
                    Experience connections like never before with Stringly.
                  </p>
                  <a href="https://tally.so/r/waD9X9">
                    <button className="bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-black hover:text-white hover:scale-105 transition-all duration-200">
                      Join
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Image with Hover Effect (Kiss Image) */}
            <div
              className={`relative w-full lg:w-full h-[340px] rounded-xl overflow-hidden bg-gradient-to-br from-black via-[#000000] to-[#1a1a1a]`}
            >
              <img
                src="/landing/kiss.png"
                alt="Kiss Image"
                className="w-full h-full object-cover opacity-[0.9]"
              />
              <div
                className={`absolute inset-0 flex md:w-[700px] items-center p-6 md:px-28 transform translate-x-[-0%] group-hover:translate-x-0 transition-transform duration-500 ppp ${
                  isMobile
                    ? hovered1[2]
                      ? "hovered"
                      : ""
                    : hovered2[0]
                    ? "hovered"
                    : ""
                }`}
                onMouseEnter={() =>
                  isMobile ? handleHover1(2) : handleHover2(0)
                }
              >
                <div className="text-white child">
                  <h2 className="text-[32px] leading-[38px] font-roboto font-bold">
                    Unmatched Privacy <br /> and Security
                  </h2>
                  <p className="text-lg mt-2 font-roboto font-light leading-[24px]">
                    Experience connections like never before with Stringly.
                  </p>
                  <a href="https://tally.so/r/waD9X9">
                    <button className=" bg-white text-black px-8 py-2 rounded-[8px] mr-4 mt-4 hover:bg-black hover:text-white hover:scale-105 transition-all duration-200">
                      Join
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <p className="uppercase font-bold font-sf text-3xl m-10 tracking-widest">
              Build on
            </p>
            <img
              src="./landing/internet-computer.png"
              alt=""
              className="w-80 h-16"
            />
          </div>
        </div>
      )}
      <section className="relative">
        <section
          className={`relative py-15`}
          style={{
            backgroundImage: `url('./bg-gradient.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxSizing: "border-box",
          }}
        >
          {/* Specifications */}
          <div
            className={`flex h-[616px] lg:h-full lg:flex-row relative justify-center px-0 gap-20 items-start mt-10 md:mx-2 lg:mx-0  md:mt-14 ${
              hovered === "section1" ? "hovered opacity-90" : ""
            }`}
          >
            {/* Text Section */}
            <div
              className={`${
                isMobile ? "bg-white rounded-xl" : "bg-none"
              } w-[90%] p-5 md:p-10 lg:p-10 !text-black mt-10 absolute lg:pl-0 lg:w-[610px] xl:w-[626px] top-[0%] lg:top-0 text-white z-10 lg:text-black md:left-2/1 lg:left-5 h-[530px] lg:h-full lg:relative flex flex-col`}
              style={{
                gap: "16px",
                padding: "20px",
              }}
            >
              <h2
                style={{}}
                className="font-sf text-[28px] md:text-[30px] font-semibold lg:text-[48px] leading-[25px] leading-tight lg:leading-[58px]  min-w-[300px]-lg"
              >
                Experience Unmatched Privacy and Elegance
              </h2>
              <p
                className="font-sf text-[15px] md:text-lg pb-4 lg:pb-0 lg:leading-[22px] font-light min-w-[300px]-lg xl:pt-4 lg:pb-14"
                style={{
                  width: "90%",
                }}
              >
                At Stringly, we prioritize your privacy while providing a
                luxurious experience. Our platform is designed to ensure that
                every connection you make is both secure and sophisticated.
              </p>
              <div className="flex flex-col md:flex-row md:justify-between gap-2 lg:mt-6 items-center lg:w-[646px] md:h-[64px] ">
                <div className="flex flex-col items-start w-full md:w-[50%]">
                  <div className="flex items-center gap-4 md:gap-2 mb-3">
                    <img
                      src="./landing/privacy .gif"
                      alt="privacy icon"
                      className="h-8 w-auto"
                    />
                    <p className="text-2xl md:text-[32px] font-sf font-semibold text-[#1E1F6D]">
                      Privacy
                    </p>
                  </div>
                  <p className="text-[15px] md:text-[16px] font-regular font-sf leading-[20px]">
                    Your privacy is our top priority.
                  </p>
                </div>

                <div className="flex flex-col items-start lg:pt-4 w-full md:w-[50%]">
                  <div className="flex items-center gap-4 md:gap-2 mb-3">
                    <img
                      src="./landing/connect.gif"
                      alt="privacy icon"
                      className="h-8 w-auto"
                    />
                    <p className="text-2xl md:text-[32px] font-sf font-semibold text-[#D454A6]">
                      Connection
                    </p>
                  </div>
                  <p className="text-[15px] md:text-[16px] font-regular font-sf leading-[20px]">
                    Connect with like-minded individuals <br /> securely.
                  </p>
                </div>
              </div>
              <div className="mt-24 lg:mt-10">
                {/* <button className="bg-white text-[14px] font-sf border border-black text-black px-6 py-3 w-32 rounded-xl">
                            Learn More
                        </button> */}
                <button className="hover:scale-105 transition-all duration-200 hidden lg:block text-[16px] font-sf bg-black text-white w-32 text-white px-2 py-3 rounded-xl">
                  <a href="https://tally.so/r/waD9X9">Sign Up</a>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:mt-0 bg-black lg:rounded-none lg:rounded-tl-xl h-full w-full lg:w-[80%] lg:h-[670px] lg:rounded-bl-xl">
              <img
                src={`${
                  isMobile ? "/landing/hugImg_mobile.png" : "/splash.png"
                }`}
                alt="Splash Image"
                className="w-full md:w-screen opacity-[.7] h-full h-full border-red-600 lg:rounded-l-[10px]"
              />
            </div>
          </div>
          <div
            className={`mt-20 w-full h-full hidden lg:block ${
              hovered === "section1" ? "opacity-60" : "opacity-1"
            }`}
            onMouseEnter={() => handleHover("section1")}
          >
            <img
              src="./landing/Lets work.png"
              alt=""
              className="mx-auto w-[1227px]"
            />
          </div>
          <div
            ref={inViewRef1}
            className={`my-10 flex items-center justify-center pt-5 px-0 lg:hidden group ${
              inView1 ? "opacity-60" : "opacity-1"
            }`}
            onMouseEnter={() => handleHover("section1")}
          >
            <img
              src="./landing/Property 1=Default.png"
              alt=""
              className="group-hover:opacity:60 h-full w-full"
            />
          </div>
          {isMobile ? (
            <div
              className={`animated-border-box absolute  flex py-4 flex-col items-center justify-center top-[64%] left-[4%] !w-[92%] md:left-[8%] bg-white text-black ${
                inView1 ? "scale-up" : "scale-0 opacity-0"
              }`}
            >
              <p className="mb-5 font-sf  font-regular">Bring your spark</p>
              <p className="font-semibold px-2 text-[32px] leading-[44px] lg:text-[48px] lg:leading-[58px] text-center font-sf pb-2 md:pb-0">
                Let's build Stringly together.
              </p>
              <p className="font-roboto text-[16px] font-sf font-regular leading-[27px]">
                Contribute to the vibes!
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFvJ4tF7YWebqvfmpbuj30pkVAkyVOhLVPju6RjBLyNMukEw/viewform">
                <button className="hover:scale-105 transition-all duration-200 rounded-xl border border-black mt-10 px-5 py-2 text-black">
                  Join Us
                </button>
              </a>
            </div>
          ) : (
            <div
              className={`animated-border-box m-2 flex top-[800px] lg:left-[23%] xl:left-[30%] flex-col items-center justify-center lg:p-20 bg-white text-black ${
                hovered === "section1" ? "scale-up" : "scale-0 opacity-0"
              } `}
              xl:style={{
                position: "absolute",
                top: "61%",
                left: "27%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p className="mb-5 font-sf font-regular">Bring your spark</p>
              <p className="font-semibold px-2 text-[32px] leading-[44px] lg:text-[48px] lg:leading-[58px] text-center font-sf mb-5 pb-2 md:pb-0">
                Let's build Stringly together.
              </p>
              <p className="font-roboto text-[16px] font-sf font-semibold leading-[27px]">
                Contribute to the vibes!
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFvJ4tF7YWebqvfmpbuj30pkVAkyVOhLVPju6RjBLyNMukEw/viewform">
                <button className="hover:scale-105 transition-all duration-200 rounded-xl border border-black mt-10 px-5 py-2 text-black">
                  Join Us
                </button>
              </a>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Landingpage;
