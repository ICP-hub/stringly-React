import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsmMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imgHeight = 1000;
      setScrolled(window.scrollY > imgHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 968);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, [scrolled, isMobile]);

  return (
    <div
      className={`w-[90%] md:w-[95%] lg:w-[95%]  mx-auto flex flex-col   py-3 md:py-0 rounded-[15px] fixed md:top-[10px] left-[-20px] right-[-20px]  z-50 md:px-4 navbar !z-00  ${
        scrolled && !isMobile
          ? "glossy-white-scrolled"
          : !isMobile && " glossy-white"
      }`}
    >
      <div className="flex w-full items-center justify-between px-2 md:px-8 py-1">
        <div className="px-2 md:py-[3px]  ">
          {scrolled ? (
            <Link to={"/"} onClick={() => window.scrollTo(0.0)}>
              <img className="w-31 h-[45px] py-2" src="Stringly.png" />
            </Link>
          ) : (
            <p className="font-sf text-[28px] text-white font-semibold text-gray-300">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                Stringly
              </Link>
            </p>
          )}
        </div>

        {/* <div className="hidden font-sfProDisplay md:flex items-center font-light justify-between gap-8">
          <p className="hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-2 rounded-lg cursor-pointer">
            Home
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
          </p>
          <p className="hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg cursor-pointer">
            Features
            <Link to="/features" onClick={() => window.scrollTo(0, 0)}>Features</Link>
          </p>
          <p className="hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg cursor-pointer">
            About
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
          </p>
          <div className="flex items-center gap-2 hover:bg-white/20 hover:backdrop-blur-lg hover:bg-opacity-30 rounded-lg px-3 py-1 rounded-lg cursor-pointer">
            <p className="flex items-center justify-between gap-2">
              Resources <IoIosArrowDown />
            </p>
          </div>
        </div> */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <div className="animated-border-button right-[10px] rounded-xl p-[3.5px] hover:scale-105 transition-all duration-200">
              <button className=" bg-white text-black text-[16px] font-sf text-black px-3 py-[6px] hover:bg-purple-100 w-38 rounded-xl">
                Download Now
              </button>
            </div>
          )}
          <div className="flex md:hidden">
            {/* <button className='text-xl' onClick={() => setIsmMenu(true)}>
                            {!isMenu && <IoIosMenu />}
                        </button> */}
            <div>
              {/* <button
                className={`hover:scale-105 transition-all duration-200 px-4 py-1 rounded-lg text-black bg-white ${
                  scrolled ? "block" : "hidden"
                } `}
              >
                <a href="https://tally.so/r/waD9X9">Join</a>
              </button> */}
              {scrolled && (
                <div className="animated-border-button right-[-1px] top-2 rounded-xl p-[3.5px] hover:scale-105 transition-all duration-200">
                  <button className=" bg-white text-black text-[16px] font-sf text-black px-3 py-[10px] hover:bg-purple-100 w-38 rounded-xl">
                    Download Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMenu && <Menu isMenu={isMenu} setIsmMenu={setIsmMenu} />}
    </div>
  );
};

export default Navbar;

export const Menu = ({ isMenu, setIsmMenu }) => {
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setIsmMenu(false);
      setClosing(false);
    }, 1000);
  };

  const handleLinkClick = () => {
    // Scroll to top of the page
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <div
      className={`nav fixed top-0 left-0 w-full h-full bg-white !z-1000 ${
        isMenu && !closing ? "slide-in" : closing ? "slide-out" : "hidden"
      }`}
    >
      <div className="flex justify-between w-full px-2 py-4">
        <p
          className="text-[18px] leading-[72px] font-sf font-semibold text-[#DC73B6] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(90.4deg, #D83694 29.82%, #0039C7 95.61%)",
          }}
        >
          Stringly
        </p>
        <div className="flex items-center gap-4">
          <div className={`border-2 border-red-900`}>
            <button
              className={`hover:scale-105 transition-all duration-200 px-4 py-1 rounded-xl bg-black text-white `}
            >
              <a href="https://tally.so/r/waD9X9">Join</a>
            </button>
          </div>

          <button
            className="hover:scale-105 transition-all duration-200 text-xl"
            onClick={closeMenu}
          >
            <RxCross1 />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start font-light justify-start gap-6 px-6 py-4">
        {/* <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/">Home</Link>
                </p>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/features">Features</Link>
                </p>
                <p className='hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <Link to="/about">About Us</Link>
                </p>
                <div className='flex items-center gap-2 hover:bg-zinc-200 px-3 py-1 rounded-lg' onClick={handleLinkClick}>
                    <p className='flex items-center justify-between gap-2'>Resources <IoIosArrowDown /></p>
                </div> */}
      </div>
    </div>
  );
};
