import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import JoinPage from '../components/JoinPage';

const FeaturesPage = () => {
    const [hovered, setHovered] = useState([false, false, false, false]);

    const handleHover = (index) => {
        if (!hovered[index]) {
            const newHovered = [...hovered];
            newHovered[index] = true;
            setHovered(newHovered);
        }
    };
    return (
        <div className='w-full max-w-[1540px] mx-auto flex flex-col items-center justify-center '>
            <section className=' w-full max-w-[1540px] mx-auto relative w-full'>
                <img src="/bg-gradient.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen lg:h-[800px] opacity-[0.7]' />
                <div className="absolute text-black left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[600px] bg-opacity-50 text-center">
                    <h1 className='font-bold font-roboto leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px]'>
                        Premium Features
                        <h2 className='text-center bg-clip-text text-transparent' style={{ backgroundImage: 'linear-gradient(90deg, #0508D6 30.34%, #AF2C80 53.17%, #DC73B6 73.67%, #F1C7E2 85.17%)' }}>
                            Unveiled
                        </h2>
                    </h1>
                    <p className='mt-4 text-lg text-center font-roboto font-light leading-[27px]'>
                        Explore the exceptional features that make Stringly the ultimate choice for discerning individuals.
                        Our platform combines luxury, privacy, and Internet Computer Protocol to enhance your dating and
                        networking experience.
                    </p>
                </div>
            </section>

            <section className='max-w-[340px]-sm md:w-[388px] lg:w-auto xl:w-full 2xl:mt-40'>
                <div className='flex items-center justify-between flex-col py-12 text-[18px]'>
                    <div className='text-center gap-4 w-[308px] md:w-[650px] lg:w-[768px] flex items-center justify-between flex-col'>
                        <p className='hidden md:block text-[40px] font-sf font-semibold leading-[48px]'>
                            Experience Unmatched Security and Luxury in Every Connection You Make.
                        </p>
                        <p className='text-[40px] font-sf font-semibold leading-[48px] md:hidden'>
                            Experience Security and Luxury
                        </p>
                        <p className='leading-[27px] font-jakarta'>
                            At Stringly, we prioritize your safety and privacy. Our Secure Connections feature ensures that every interaction is protected by cutting-edge technology. Enjoy peace of mind while forging meaningful relationships.
                        </p>
                    </div>
                </div>

                <div className='px-4 flex items-center gap-4 justify-evenly py-4 lg:px-2 flex-wrap'>
                    {['FeaturesCard1.png', 'FeaturesCard2.png', 'FeaturesCard3.png'].map((image, index) => (
                        <div key={index} className="card1 relative w-full md:w-[400px] lg:w-[378px] h-[357px] xl:w-[430px] xl:h-[400px] bg-black rounded-2xl text-white overflow-hidden">
                            <img
                                src={`./${image}`}
                                alt="features"
                                className="card-image1 w-full h-full object-cover opacity-[50%] rounded-2xl transition-transform duration-400"
                            />
                            <div className="card-content1 absolute md:w-[326px] lg:top-[190px] xl:top-[229px] left-[15px] md:left-[25px] lg:left-[41px]">
                                <p className="text-[21px] md:text-[24px] font-jakarta font-bold leading-[28px] pb-[10px]">
                                    Tailored Matches Designed for Your Unique Preferences and Lifestyle.
                                </p>
                                <p className="card-description1 opacity-0 font-light transition-opacity duration-500">
                                    Our Premium Matchmaking service connects you with individuals who truly align with your values.
                                </p>
                                <p className="learnMore1 absolute bottom-6 left-4 text-[18px] flex items-center gap-2">
                                    Learn More <FaChevronRight />
                                </p>
                            </div>
                            <button className="card1-button1 flex items-center gap-2 absolute border bottom-4 rounded-xl px-8 py-2 my-2">
                                Sign Up
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className='w-full md:w-[650px] lg:w-auto min-px-2-md xl:w-full'>
                {/* First card */}
                <div
                    className={`ppp py-8 px-2 lg:p-0 lg:flex relative items-center justify-between !pt-24 rounded-xl z-10 ${hovered[0] ? 'hovered' : ''}`}
                    onMouseEnter={() => handleHover(0)}
                >
                    <div className={`child hidden box-border lg:block w-[616px] lg:px-12`}>
                        <p className='font-sf font-semibold text-[30px] leading-[36px] md:text-[44px] md:leading-[57px]'>
                            Experience Unmatched Privacy with Stringly's Secure Connections Powered by ICP
                        </p>
                        <p className='text-[14px] font-jakarta font-regular leading-[19px] md:text-[22px] md:leading-[30px]'>
                            Our Premium Matchmaking service uses advanced algorithms to connect you with like-minded individuals. By analyzing your preferences and goals, we ensure that every match is meaningful and aligned with your aspirations.
                        </p>
                    </div>
                    <div className=' z-20 lg:w-[50%] bg-black rounded-xl'>
                        <img src="/FeaturesRectangle 1.png" alt="" className='h-screen rounded-xl lg:w-full lg:h-[550px] object-cover opacity-[0.6]' />
                    </div>
                </div>

                {/* Second card */}
                <div className={`ppp px-2 lg:w-full m-auto py-8 lg:p-0 lg:flex items-center justify-between z-10 ${hovered[1] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(1)}>
                    <div className='z-20 lg:w-[50%] bg-black rounded-xl'>
                        <img src="/FeaturesRectangle 2.png" alt="" className='h-screen lg:w-full lg:h-[550px] rounded-xl object-cover opacity-[0.6]' />
                    </div>
                    <div className='child-2 hidden box-border lg:pr-12 lg:block w-[616px]  '>
                        <div>
                            <p className='font-sf font-semibold text-[30px] leading-[40px] md:text-[44px] md:leading-[55px]'>
                                Experience Premium Matchmaking                            </p>
                            <p className='font-sf font-regular text-[14px] md:text-[22px] md:leading-[30px] py-8'>
                                Our Premium Matchmaking service uses advanced algorithms to connect you with like-minded individuals. By analyzing your preferences and goals, we ensure that every match is meaningful and aligned with your aspirations.
                            </p>
                        </div>
                        <div className='flex items-start justify-evenly'>
                            <ul className='flex flex-col w-[296px]'>
                                <li className='text-[18px] font-jakarta font-bold leading-[21px] py-4'>
                                    Smart Algorithms
                                </li>
                                <li className='font-sf font-regular text-md leading-[20px]'>
                                    Our algorithms consider interests, values, and relationship goals for optimal matches.
                                </li>
                            </ul>
                            <ul className='w-[296px]'>
                                <li className='text-[18px] font-jakarta font-bold leading-[21px] py-4'>
                                    Personalized Experience
                                </li>
                                <li className='font-sf font-regular text-md leading-[20px]'>
                                    Every user receives tailored recommendations based on their unique profile and preferences.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </section>

            <section className='w-full  md:px-8 lg:p-0 lg:w-full  bg-gradient-full flex items-center flex-col'>
                {/* Third card */}
                <div className={`ppp py-8 px-2 md:w-[656px] lg:p-0 lg:w-full lg:flex items-center justify-between z-10 ${hovered[2] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(2)}>
                    <div className='child hidden lg:block lg:w-[616px] lg:px-12 opacity-0'>
                        <div className='mb-8'>
                            <p className='font-roboto font-bold text-[28px] md:text-[44px] leading-[36px] md:leading-[55px]'>
                                Long heading is what you see here in this feature section
                            </p>
                            <p className='font-roboto font-regular text-sm md:text-[22px] leading-[21px] md:leading-[30px] py-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </p>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <ul className=''>
                                <li className='text-[17px] font-jakarta font-bold leading-[21px] py-4'>
                                    Subheading one
                                </li>
                                <li className='font-sf font-regular text-[16px] leading-[20px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </li>
                            </ul>
                            <ul className=''>
                                <li className='text-[17px] font-jakarta font-bold leading-[21px] py-4'>
                                    Subheading two
                                </li>
                                <li className='font-sf font-regular text-[16px] leading-[20px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='z-20 bg-black lg:w-[50%] rounded-xl'>
                        <img src="/FeaturesRectangle 3.png" alt="" className='h-screen lg:w-full lg:h-full object-cover rounded-xl' />
                    </div>
                </div>
                <div className='flex items-center justify-center text-center py-40'>
                    <div className='flex items-center justify-center flex-col text-center w-full lg:w-[768px] p-4 gap-8'>
                        <img src="/FeaturesLogo_webflow.png" alt="Stringly Logo" className='w-full max-w-[130px] mx-auto' />
                        <p className='text-[24px] font-jakarta font-bold md:text-xl px-4'>
                            "Stringly transformed my dating life. The luxury and privacy made all the difference in finding genuine connections."
                        </p>
                        <div className='flex items-center justify-center flex-col text-center'>
                            <img src="/Ellipse 4.svg" alt="Emily Johnson" className='pb-4 w-[50%] h-[50%] rounded-full' />
                            <p className='font-semibold'>Emily Johnson</p>
                            <p className='text-sm text-gray-600 font-semibold font-jakarta'>Marketing Director, LuxeCo</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`ppp lg:px-16 lg:flex relative items-center justify-between px-4 z-10  ${hovered[4] ? 'hovered' : ''}`}
                    onMouseEnter={() => handleHover(4)}
                >
                    <div className={`child hidden lg:block lg:w-[616px]  m-auto opacity-0] pr-4`}>
                        <p className='font-sf font-semibold text-[32px] md:text-[48px] leading-[38px] md:leading-[57px] lg:py-8'>
                            Experience the Luxury of Meaningful Connections
                        </p>
                        <p className='text-sm font-jakarta leading-[21px] font-regular lg:leading-[27px] py-4'>
                            Stringly offers a unique blend of privacy and luxury, ensuring that every connection is secure and exclusive. Enjoy access to a curated community of high-profile users who value meaningful interactions.
                        </p>
                        <ul className='font-sf font-regular text-sm leading-[16px] md:leading-[20px]'>
                            <li>Enhanced privacy for your personal and professional connections.</li>
                            <li>Exclusive access to a premium user network.</li>
                            <li>A luxurious experience tailored to your dating needs.</li>
                        </ul>
                        <div className='py-10 flex gap-8'>
                            <button className='px-6 py-2 rounded-lg border border-black'>Join</button>
                            <button className='flex items-center gap-4'>
                                Discover <FaChevronRight />
                            </button>
                        </div>
                    </div>
                    <div className='z-20 bg-black rounded-xl'>
                        <img src="/FeaturesPlaceholder Image.png" alt="" className='h-screen lg:h-auto object-cover' />
                    </div>
                </div>
            </section>

            <JoinPage />
        </div>

    )
}

export default FeaturesPage