
// import React, { useEffect, useState } from "react";
// import { FaInstagram } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaHome } from "react-icons/fa";
// import { MdOutlineRoundaboutLeft } from "react-icons/md";
// import { GrServices } from "react-icons/gr";
// import { RiContactsFill } from "react-icons/ri";
// import { Link, NavLink } from "react-router-dom";
// // import { useRouter } from "next/router";
// import { CiClock2 } from "react-icons/ci";
// import { MdEmail } from "react-icons/md";
// import { FaRegClock } from "react-icons/fa";

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false);
//   // const router = useRouter();

//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const shouldBeVisible = scrollY <= 0; // Hide when scrolled down 1px or more
//       setIsVisible(shouldBeVisible);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//     <div>
//       <nav className="text-white max-sm:bg-[#0369A1]  w-full z-20 top-0 start-0 h-fit  px-14 max-sm:px-0">
       


//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative  ">

// 		<img src="https://t3.ftcdn.net/jpg/05/99/32/84/360_F_599328438_8IOBA7eB2DfIVXwFZRPcKmJrHCv7yFlJ.jpg" className=" h-[10vh] w-[10vw] max-sm:h-[10vh] md:w-[89px] object-cover object-fit " alt="" />
					


//           <div
//             className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <nav className=" ">
//               <ul className="font-[500] md:flex flex-col text-lg  text-black  bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              


//             <li className='text-black'>
//  							<NavLink style={(e)=>{
//                            return{
//                          color: e.isActive ? "rgb(3 105 161)" : "",
//                         fontWeight: e.isActive ? "bold" : "",
                      
//                                        }
//              }} className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150 "  to="/">Home</  NavLink>
// 							</li>



//               <li className='text-black'>
//  							<NavLink style={(e)=>{
//                            return{
//                          color: e.isActive ? "rgb(3 105 161)" : "",
//                         fontWeight: e.isActive ? "bold" : "",
                       
//                                                             }
//              }} className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"  to="/about">About</  NavLink>
// 							</li>

                

//                <li className='text-black'>
//  							<NavLink style={(e)=>{
//                            return{
//                          color: e.isActive ? "rgb(3 105 161)" : "",
//                         fontWeight: e.isActive ? "bold" : "",
                       
//                                                             }
//              }} className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"  to="/contact">Contact</  NavLink>
// 							</li>

              
// 							<li>
// 							<NavLink
								
// 									to="https://wa.me/+917805806867"
// 									style={(e)=>{
// 										return{
// 											color: e.isActive ? "rgb(3 105 161)" : "",
// 											fontWeight: e.isActive ? "bold" : "" ,
//                       transition:e.isActive? "all": "",
//                       transitionTimingFunction:e.isActive? "ease": "",
//                       transitionDuration:e.isActive? "0.3s": "",
// 										}
// 									}}  className={"rounded-md  border-2 border-black block py-1 pr-4 pl-3 text-black max-sm:border-none "} 
// 								>
// 									Call
// 								</NavLink>

							
// 							</li>

//               </ul>
//             </nav>
//           </div>

//           <div>
//             {navbar ? (
//               <RxCross2
//                 onClick={() => setNavbar(!navbar)}
//                 className="cursor-pointer text-[24px]  md:hidden"
//               />
//             ) : (
//               <RxHamburgerMenu
//                 onClick={() => setNavbar(!navbar)}
//                 className="cursor-pointer text-[24px]  md:hidden "
//               />
//             )}
//           </div>
//         </div>
//         {navbar && (
//           <div className=" md:hidden max-sm:bg-[#0369A1]  text-white flex flex-col  px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30  animateNav overflow-hidden">
//             <div className=" flex flex-col h-[40px] px-[30px]  ">
//               <div className="flex gap-1 hover:text-black   hover:bg-white h-full items-center ">
//                 <Link href="/" className="px-[10px]">
//                   Home
//                 </Link>
//               </div>

//               <div className="w-[100%] h-fit flex items-center justify-center">
//                 <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
//               </div>
//             </div>

//             <div className=" flex flex-col h-[40px] px-[30px]  ">
//               <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
//                 <Link to="/About" className="px-[10px]">
//                   About
//                 </Link>
//               </div>

//               <div className="w-[100%] h-fit flex items-center justify-center">
//                 <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
//               </div>
//             </div>

//             <div className=" flex flex-col h-[40px] px-[30px]  ">
//               <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
//                 <Link to="/Contact" className="px-[10px]">
//                   Contact Us
//                 </Link>
//               </div>

//               <div className="w-[100%] h-fit flex items-center justify-center">
//                 <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
//               </div>
//             </div>

//             <div className=" flex flex-col h-[40px] px-[30px]  ">
//               <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
//                 <Link to="https://wa.me/+917805806867" className="px-[10px]">
//                   Call
//                 </Link>
//               </div>

//               <div className="w-[100%] h-fit flex items-center justify-center">
//                 <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeVisible = scrollY <= 0; // Hide when scrolled down 1px or more
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setNavbar(false); // Close the mobile menu when a menu item is clicked
  };

  return (
    <div>
      <nav className="text-white max-sm:bg-[#0369A1] w-full z-20 top-0 start-0 h-fit px-14 max-sm:px-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <img
            src="https://t3.ftcdn.net/jpg/05/99/32/84/360_F_599328438_8IOBA7eB2DfIVXwFZRPcKmJrHCv7yFlJ.jpg"
            className="h-[10vh] w-[10vw] max-sm:h-[9vh] max-sm:w-32 object-cover object-fit"
            alt=""
          />

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav className=" ">
              <ul className="font-[500] md:flex flex-col text-lg text-black bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="text-black">
                  <NavLink
                    style={(e) => ({
                      color: e.isActive ? "rgb(3 105 161)" : "",
                      fontWeight: e.isActive ? "bold" : "",
                    })}
                    onClick={handleMenuItemClick}
                    className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="text-black">
                  <NavLink
                    style={(e) => ({
                      color: e.isActive ? "rgb(3 105 161)" : "",
                      fontWeight: e.isActive ? "bold" : "",
                    })}
                    onClick={handleMenuItemClick}
                    className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="text-black">
                  <NavLink
                    style={(e) => ({
                      color: e.isActive ? "rgb(3 105 161)" : "",
                      fontWeight: e.isActive ? "bold" : "",
                    })}
                    onClick={handleMenuItemClick}
                    className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://wa.me/+917805806867"
                    onClick={handleMenuItemClick}
                    style={(e) => ({
                      color: e.isActive ? "rgb(3 105 161)" : "",
                      fontWeight: e.isActive ? "bold" : "",
                      transition: e.isActive ? "all" : "",
                      transitionTimingFunction: e.isActive ? "ease" : "",
                      transitionDuration: e.isActive ? "0.3s" : "",
                    })}
                    className={"rounded-md  border-2 border-black block py-1 pr-4 pl-3 text-black max-sm:border-none"}
                  >
                    Call
                  </NavLink>

                  <li className="text-black">
                  <NavLink
                    style={(e) => ({
                      color: e.isActive ? "rgb(3 105 161)" : "",
                      fontWeight: e.isActive ? "bold" : "",
                    })}
                    onClick={handleMenuItemClick}
                    className="hover:border-b-2 hover:border-black hover:border-solid transition-all ease-linear duration-150 hover:transition-all hover:ease-linear hover:duration-150"
                    to="/Signup"
                  >
                    Dashboard
                  </NavLink>
                </li>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            {navbar ? (
              <RxCross2
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px] md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px] md:hidden"
              />
            )}
          </div>
        </div>
        {navbar && (
          <div className="md:hidden max-sm:bg-[#0369A1] text-white flex flex-col px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30 animateNav overflow-hidden">
            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-black hover:bg-white h-full items-center ">
                <Link onClick={handleMenuItemClick} to="/" className="px-[10px]">
                  Home
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
                <Link onClick={handleMenuItemClick} to="/about" className="px-[10px]">
                  About
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
                <Link onClick={handleMenuItemClick} to="/contact" className="px-[10px]">
                  Contact Us
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className="flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1   h-full hover:text-black   hover:bg-white items-center ">
                <Link onClick={handleMenuItemClick} to="https://wa.me/+917805806867" className="px-[10px]">
                  Call
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;