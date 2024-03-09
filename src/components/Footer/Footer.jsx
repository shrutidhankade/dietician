import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";

export default function Footer() {
	return (
		
	
	
		<footer class="bg-slate-200 overflow-x-hidden max-w-screen-xl  ">
		  <div class="max-w-screen-xl px-4 py-16 max-auto sm:px-6 lg:px-8">

			
			<div class="grid grid-cols-1 gap8 lg:grid-cols-3 m-auto  w-[85vw]">
			

			{/* max-w-xs */}
			  <div className=' w-fit' >
			  <img src="https://t3.ftcdn.net/jpg/05/99/32/84/360_F_599328438_8IOBA7eB2DfIVXwFZRPcKmJrHCv7yFlJ.jpg" class="mr-5 h-10 sm:h-10"  alt="logo" />
				<p class="w-[35vw] mt-4 text-[1.2vmax] text-gray-600  max-sm:text-[2.5vmax] max-sm:w-[65vw]">
				Empower your journey to wellness with personalized nutrition plans tailored to your unique needs. Discover the joy of healthy living today!
				</p>
				<div class="flex mt-8 space-x-6 text-gray-600  ">
				 
				<Link target='_blank' to="https://babashivabramhiji.inextets.online/#" className=" hover:text-black text-gray-600 text-2xl" >
	 					
				<FaInstagram />
							<span className="sr-only">Instagram page</span>
						</Link>

				 
				  <Link target='_blank' to="https://babashivabramhiji.inextets.online/#" className=" hover:text-black text-gray-600  text-2xl">
						
					<LuFacebook />
 					<span className="sr-only">Facebook page</span>
					</Link>

				
				  <Link target='_blank'  to="https://babashivabramhiji.inextets.online/#" className=" hover:text-black text-gray-600  text-2xl">
				  <FaTwitter />
						<span className="sr-only">Twitter Page</span>
					</Link>

					<Link  target='_blank' to="https://babashivabramhiji.inextets.online/#" className=" hover:text-black text-gray-600  text-2xl">
					<RiYoutubeLine />
						<span className="sr-only">Youtube Page</span>
					</Link>

				</div>
			  </div>

			  <div class="grid grid-cols-1 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3   gap-10  w-[45vw] ml-48  max-sm:m-0 max-sm:mt-4 max-sm:pb-5 max-sm:w-full">
				<div  >
				  <p class="font-medium">
					<h4 className='fontfamily font-bold'>QUICK LINKS</h4>
				  </p>
				  <ul className="text-gray-500 font-medium mt-4 ">
		 						<li className="mb-4">
	 							<Link to="/" className="hover:underline">
										Home
							</Link>
							</li>
							<li className="mb-4">
							<Link to="/about" className="hover:underline">
									About
									</Link>
	 						</li>
								<li className="mb-4">
	 							<Link to="/contact" className="hover:underline">
	 								Contact
	 							</Link>
	 						</li>
							<li className="mb-4">
	 							<Link to="/symtomps" className="hover:underline">
	 								Symtomps
									</Link>
								</li>
							</ul>
				</div>
				<div className=' '>
				<p class="font-medium">
					<h4 className='fontfamily font-bold'>RESOURCES</h4>
				  </p>
				 
				  <ul className="text-gray-500 font-medium mt-4">
		 						<li className="mb-4">
		 							<a
		 								href="https://github.com/hiteshchoudhary"
		 								className="hover:underline"
		 								target="_blank"
		 								rel="noreferrer"
		 							>
		 								WHO Information
		 							</a>
		 						</li>
		 						<li className="mb-4">
		 							
									Weight Gain
		 						</li>
		 						<li className="mb-4">
		 							
									Diabetic Diet
		 						</li>

								 <li className="mb-4">
		 							
							      Virtual Consultations
		 						</li>
		 					</ul>

				</div>
				<div className=' w-48'>
				<p class="font-medium">
					<h4 className='fontfamily font-bold'>CONTACT INFO</h4>
				  </p>
				 
				  <ul className="text-gray-500 font-medium mt-4">
								<li >
								<p>123 Fifth Ave, New York,</p>
									
									<p > NY 12004, United States.
 							</p>
							</li>
								<li className="mt-7">
 							<p>+91 7247629743</p>
							</li>
							<li className="mt-5">abcd@gmail.com</li>
						</ul>
				</div>
				
			  </div>
			</div>

			<div className="copyrightdiv h-11 flex items-center justify-center w-[94vw]  text-black font-bold absolute mt-[1.6vmax] max-sm:-ml-2 ">
			<span className="text-sm text-[1.2vmax] sm:text-left max-sm:text-[2.1vmax] max-sm:text-center max-md:px-2">
						Copyright
					<a href="https://hiteshchoudhary.com/" className="hover:underline">
					© 2024 babashivbrahmi{' '}
					</a>,
					
				Powered by babashivbrahmi . All Rights Reserved.
			</span>
			</div>
			
		  </div>
		</footer>
	

	);
}

