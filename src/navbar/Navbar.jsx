import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Navbar() {
  const [menuopen, setmenuopen] = useState(false);
  const menutopics = [
    { name: "Home", url: "/home" },
    { name: "About me", url: "/aboutme" },
    { name: "Services", url: "/service" },
    { name: "Testimonial", url: "/testmonial" },
    { name: "Address", url: "/address" },
  ];

    const navagate = useNavigate()
    
  // const number=9381235807


  const number=  "+919705309118"
  // const whatsappNumber = "919381235807"
  // const message = "Hello, Send this message !"; // Your custom message

   // Function to detect mobile devices
   const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const makeCall = () => {
    if (isMobile()) {
      window.location.href = `tel:${number}`; // Redirect to phone dialer on mobile
    } else {
      window.open(`https://wa.me/${number}`, "_blank")
    }
  };


  // const sendmessage = () => {
  //   const encodedMessage = encodeURIComponent(message); // Encode special characters
  //   window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  // };


  return (
    <>
        <nav className="">
            {/* containtr */}
            <div className="flex flex-row items-center justify-between  bg-gray-200 p-4 "  > 
                <div>
                    <h1 className="font-bold text-3xl cursor-pointer" onClick={()=>{navagate("/")}} >logo</h1>
                </div>

               

                <div className=" hidden  sm:flex flex-row gap-5 text-red-500 " >
                    {
                        menutopics.map((item,index)=>(
                           <Link to={item.url} key={index} >
                            <ul   >
                            <li className=" cursor-pointer font-semibold hover:text-slate-900 ">{item.name}  </li>
                            </ul>
                           </Link>
                        ))
                    }
                 </div>
                  <h1 className="bg-red-500 cursor-pointer rounded-lg p-3  hidden md:block hover:bg-red-700 "
                  
                  onClick={makeCall}
                  >call {number}</h1>
                    

               {/* mobile version  */}
                <div className="visible sm:hidden" >
                <FontAwesomeIcon icon={faBars} 
                onClick={()=>setmenuopen(!menuopen)}
                className="text-4xl  " />
                </div>
            </div>

               
                {/* mobile version  */}
                {
                    menuopen && 
                    <div className=" w-full bg-gray-200 p-3  flex flex-col items-center  sm:hidden " >
                    {
                        menutopics.map((item,index)=>(
                            <Link to={item.url} key={index} 
                            
                            >
                            <ul  className="p-3 "   >
                            <li className=" cursor-pointer font-semibold text-xl hover:text-red-600  " 
                            // set click after hide 
                            onClick={()=>setmenuopen(!menuopen)} >
                                {item.name}</li>
                            </ul>
                            </Link>
                        ))
                    }
                 </div>
                }
        </nav>
    </>
  )
}

export default Navbar



