import React from 'react'

const JoinPage = () => {
	return (
		<div className='flex items-center justify-center flex-col mb-20 '>
			<div className='flex items-center justify-center flex-col p-8 lg:w-[727px]'>
				<p className='font-roboto text-[32px] lg:text-[48px] text-center font-bold  leading-[38px] lg:leading-[57px] py-6'>Join the Exclusive Network</p>
				<p className='font-roboto font-regular text-[18px] leading-[27px] text-center'>Experience luxury and privacy like never before with Stringly’s unique dating and networking platform.</p>
			</div>
			<div className="mt-10 space-x-6">
			<button className="text-[16px] font-sf bg-black text-white w-32 text-white px-2 py-3 rounded-xl">
					Sign Up
				</button>
				<button className="bg-white text-[14px] font-sf border border-black text-black px-6 py-3 w-32 rounded-xl">
					Learn More
				</button>
			</div>
		</div>
	)
}

export default JoinPage