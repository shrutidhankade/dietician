import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

export default function About() {
	return (
		<div className="py-16  bg-[#F6F5F8] px-4 max-sm:w-full">
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
				<div className="space-y-6 md:space-y-0  lg:space-y-0  sm:space-y-0 md:flex md:gap-6  ">
					<div className="md:5/12 h-[95vh] max-sm:w-[100%] max-sm:h-[100vh] lg:w-[50%]  ml-10 max-sm:-ml-8 ">
						<img className='w-full  h-full object-cover  '
							src="https://static.wixstatic.com/media/2a1a02_b7200f82e5184dbeac5321d69e69789f~mv2.jpg/v1/fill/w_950,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_b7200f82e5184dbeac5321d69e69789f~mv2.jpg"
							alt="image"
						/>
					</div>
					<div className='w-[26%] max-sm:top-60  h-[63vh] max-sm:h-[52vh] max-sm:w-[75vw] bg-white absolute left-[30%] top-[35vh] max-sm:-ml-6 '>
						<h1 className='text-[2.7vw] max-sm:text-3xl  font-bold leading-[3.1vw] tracking-wide  text-black ml-10 mt-10'>
							Be Healthy, <br />
							Be Happy</h1>

						<p className='ml-10 mt-10  max-sm:text-xl max-sm:mt-5 leading-[2vw] text-2xl tracking-wide'>I'm Heather, a registered <br /> dietitian and certified <br /> health coach.</p>
						<main class="flex mt-10 ml-10 ">

							<button class="group relative h-12 w-44 overflow-hidden rounded-sm bg-[#008566] text-lg font-bold text-white max-sm:-mt-4">
								Book a Session
								<div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
							</button>


						</main>
					</div>
					<div className="md:7/12  lg:w-[40%] ml-5 max-sm:w-full max-sm:-ml-1">
						<img
							className="h-[90vh] max-sm:w-full max-sm:h-full max-sm:object-contain w-full rounded-[1vw] object-cover"
							src="https://babashivabramhiji.inextets.online/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-06-at-3.18.05-PM.jpeg"
							alt=""
						/>
						



					</div>
				</div>

			</div>
		</div>
	);
}