import React, { useState } from 'react'
import JoinPage from '../components/JoinPage';
import TestimonialGrid from '../components/TestimonialGrid';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function About() {
	const [hovered, setHovered] = useState([false, false, false]);

	const handleHover = (index) => {
		if (!hovered[index]) {
			const newHovered = [...hovered];
			newHovered[index] = true;
			setHovered(newHovered);
		}
	};
	return (
		<div className='flex items-center justify-center flex-col'>
			<section className=' w-full max-w-[1540px] mx-auto relative w-full bg-black'>
				<img src="./aboutHeroImg.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen lg:h-auto opacity-[0.7]' />
				<div className="absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] p-2 md:w-[600px] bg-opacity-50 text-center">
					<h1 className='font-bold font-sf leading-[42px] lg:leading-[72px] text-[38px] lg:text-[56px]'>
						Discover Our Story.</h1>
					<p className='text-[18px] text-center font-roboto font-light leading-[27px]'>
						Explore the vision behind Stringly and our commitment to redefining connections in a luxurious way.
					</p>
					<div className="mt-10 space-x-6">
						<button className="bg-white text-[16px]font-light font-sf text-black px-6 py-3 w-32 rounded-xl">
							Join Us
						</button>
						<button className="bg-transparent text-[16px] font-light font-sf border border-white w-32 text-white px-2 py-3 rounded-xl">
							Learn More
						</button>
					</div>
				</div>
			</section>
			<section className='md:w-[650px] lg:w-auto lg:w-[1440px] xl:w-full '>
				{/* First Card */}
				<div
					className={`ppp lg:h-auto animate mt-20 p-2 py-8 lg:p-0 lg:flex items-center justify-between z-10 gap-8 ${hovered[0] ? 'hovered' : ''}`}
					onMouseEnter={() => handleHover(0)}
				>
					<div className={`child lg:px-12 hidden lg:block lg:w-[616px] h-full opacity-0`}>
						<p className='font-sf font-semibold text-[32px] leading-[35px] lg:leading-[38px] py-8 w-full lg:w-auto mt-10 lg:mt-0'>
							Our Journey: Crafting Meaningful Connections Through Luxury
						</p>
						<p className='text-[16px] font-jakarta font-regular leading-[19px]'>
							At Stringly, we believe in transforming the way people connect. Our mission is to blend luxury with technology, creating a unique platform for both dating and networking.
						</p>
						<div className='flex items-start justify-evenly'>
							<div className='flex flex-col w-[296px]'>
								<p className='text-[20px] font-jakarta my-4 font-bold leading-[28px]'>
									Our Inspiration
								</p>
								<p className=' font-sf my-4 text-[16px] leading-[25px]'>
									Driven by a passion for meaningful connections and user empowerment, we innovate continuously.
								</p>
							</div>
							<div className='w-[296px]'>
								<p className='text-[20px] font-jakarta my-4 font-bold leading-[28px]'>
									Founding Team
								</p>
								<p className='font-sf my-4 text-[16px] leading-[25px]'>
									Our diverse team combines expertise in technology, design, and relationship-building for your benefit.
								</p>
							</div>
						</div>
					</div>
					<div className='rounded-xl w-full lg:w-auto !h-[656.66px] lg:!h-auto z-20 left-right children bg-black'>
						<img src="./aboutPageImage1.png" alt="PageImage1" className='h-full w-full lg:h-auto object-cover opacity-[0.7]' />
					</div>
				</div>

				{/* Second Card */}
				<div
					className={`mt-20 lg:mt-0 ppp !h-[656.66px] lg:!h-auto animate p-2 z-10 py-8 lg:p-0 lg:flex items-center justify-between ${hovered[1] ? 'hovered' : ''}`}
					onMouseEnter={() => handleHover(1)}
				>
					<div className='rounded-xl w-full lg:w-auto !h-[656.66px] lg:!h-auto children bg-black'>
						<img src="./aboutPageImage2.png" alt="PageImage2" className='h-full w-full lg:h-auto object-cover opacity-[0.8]' />
					</div>
					<div className='lg:w-[696px] child-2 hidden lg:block lg:px-12'>
						<div>
							<p className='font-sf font-semibold text-[32px] md:text-[44px]  md:leading-[48px]'>
								Our Commitment to Innovation and Privacy
							</p>
							<p className='font-jakarta font-regular text-[16px] leading-[19px] py-4'>
								At Stringly, we prioritize innovation and user privacy in every aspect of our platform. Our mission is to empower users to forge meaningful connections in a secure environment.
							</p>
						</div>
						<div className="grid h-[200px] grid-cols-2 text-white">
							<ul className='w-[150px] lg:w-full'>
								<li>
									<h2 className="text-[48px] font-roboto font-bold text-white lg:text-blue-900 mb-2">100%</h2>
								</li>
								<li><p className="text-lg font-jakarta text-[16px] lg:text-gray-500">
									Innovation drives us to create exceptional user experiences.
								</p></li>
							</ul>
							<ul className='w-[150px] lg:w-full'>
								<li>
									<h2 className="text-[48px] font-roboto font-bold text-white lg:text-blue-900 mb-2">100%</h2>

								</li>
								<li>
									<p className="text-lg font-jakarta text-[16px] lg:text-gray-500">
										Privacy ensures your connections are secure and confidential.
									</p>
								</li>
							</ul>
						</div>
						<div className=" flex items-start space-x-4 text-white">
							<button className="px-2 lg:px-4 py-2 border-2 lg:border-black lg:text-black text-lg rounded-xl hover:bg-black hover:text-white transition-colors">
								Learn More
							</button>
							<button className="px-8 py-2 lg:text-black text-lg flex items-center space-x-2 hover:underline">
								<span>Join Us</span>
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* <main className='flex flex-col items-center bg-gradient-full bg-gradient-full border-2 border-red-200'>
				<div className="max-w-6xl mx-auto text-center animate" >
					<h1 className='text-[32px] lg:text-[48px] font-bold lg:leading-[57px] font-roboto text-black mt-16 mb-4'>Our Team</h1>
					<p className='text-gray-600 font-regular text-[18px] font-bold font-roboto mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className="p-4 md:p-2 flex items-center justify-center mb-16 animate">
					<div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 animate lg:gap-8 lg:w-[1285px]">
						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault1.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>
						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault2.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>
						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault3.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>

						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault4.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>
						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault5.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>
						<div className="flex sm:w-[120px] md:w-[174px] sm:h-[180px] md:h-[231px] md:w-[300px] md:h-[360px] lg:w-[407px] lg:h-[540px] flex-col p-0">
							<img src="./aboutDefault6.png" alt="Erika Fisher" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
			</main> */}
			<section className='bg-gradient-full w-full'>
				<main className="flex flex-col items-center">
					<div className="max-w-6xl mx-auto text-center animate">
						<h1 className="text-[32px] lg:text-[48px] font-bold lg:leading-[57px] font-roboto text-black mt-16 mb-4">Our Team</h1>
						<p className="text-gray-600 font-regular text-[18px] font-bold font-roboto mb-10">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="p-4 md:p-2 flex items-center justify-center mb-16 animate">
						<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
							{[1, 2, 3, 4, 5, 6].map((num) => (
								<div key={num} className="flex sm:w-[100px] md:w-[154px] sm:h-[160px] md:h-[211px] md:w-[280px] md:h-[340px] lg:w-[310px] lg:h-[460px] xl:w-[377px] xl:h-[500px] flex-col p-0">
									<img
										src={`./aboutDefault${num}.png`}
										alt={`Team Member ${num}`}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</main>
			</section>

			{/* card 3 */}
			<section className='px-4 lg:px-8'>
				<div className='relative w-full lg:h-[1000px] bg-black'>
					<img src="./aboutComponent 2.png" alt="Premium Features" className='w-screen relative object-cover h-full opacity-[0.7]' />
					<div className='hidden md:flex items-center flex-col gap-4 justify-center absolute text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] p-2 md:w-[600px] bg-opacity-50 text-center'>
						<h1 className='font-sf font-semibold text-[32px] leading-[38px] md:leading-[57px] md:text-[48px]'>
							Harnessing ICP for Ultimate User Security</h1>
						<p className='text-[14px] text-center leading-[21px] font-jakarta font-regular  md:text-[18px] md:leading-[27px]'>
							At Stringly, we utilize the Internet Computer Protocol (ICP) to provide a secure and private environment for our users. This cutting-edge technology ensures that your personal data remains confidential while you explore meaningful connections. With Stringly, you can enjoy peace of mind knowing that your privacy is our top priority.
						</p>
						<div className="flex space-x-4 my-10">
							<button className="px-6 py-1.5 border-2 border-white text-white text-lg rounded-xl hover:bg-black hover:text-white transition-colors">
								Learn More
							</button>
							<button className="px-8 py-4 text-white text-lg flex  items-center space-x-2 hover:underline">
								<span>Sign Up</span>
								<MdOutlineKeyboardArrowRight />
							</button>
						</div>
					</div>
				</div>
			</section>
			<div className='hidden lg:block'>
				<TestimonialGrid />
			</div>
			<section>
				<div className="h-full py-12 mb-12 px-6 flex flex-col box-contain">
					<div className="h-full mx-auto text-center">
						<h1 className="text-[48px] font-sf font-bold text-black mb-4">Our Journey</h1>
						<p className="text-gray-600 text-[18px] font-jakarta mb-10">
							Explore the milestones and culture that define Stringly.
						</p>
						<div className="h-full flex lg:gap-8 flex-col gap-8 lg:flex-row">
							<div className="relative w-full pb-8 lg:pb-0 bg-black">
								<img src="./aboutPlaceholder-Image-1.png" alt="Journey Image 1" className="w-full h-screen lg:h-auto object-cover rounded-none opacity-[0.7]" />
							</div>
							<div className="relative w-full bg-black">
								<img src="./aboutPlaceholder-Image-2.png" alt="Journey Image 2" className="w-full h-screen lg:h-auto object-cover rounded-none opacity-[0.7]" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoinPage />
		</div>
	)
}

export default About

