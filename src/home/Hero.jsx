
// import React from "react";

// function Hero() {
//   return (
//     <div className="container  mx-auto flex  p-5 md:flex-row flex-col items-center">
      
//       {/* Left Content */}
//       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
//           Discover The Secret of Living Life with Passion!
//         </h1>
//         <p className="mb-8 leading-relaxed">Here's where I put my thoughts</p>

//         {/* Buttons */}
//         <div className="flex justify-center">
//           <a
            
//             className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer"
//           >
//             contact 
//           </a>
          
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//         <img
//           className="object-cover object-center "
//           alt="hero"
//           src="girl.jpeg"
//         />
//       </div>

//     </div>
//   );
// }

// export default Hero;



import React from "react";

function Hero() {

  
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
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('girl.jpeg')" }} // Set background image
    >
      {/* Overlay (Optional) */}
      <div className="absolute inset-0 bg-black-300 bg-opacity-10"></div>

      {/* Left Content */}
      <div className="container mx-auto relative z-10 text-white p-5 mt-80 ml-0   max-w-2xl md:ml-10   ">
        <h1 className=" text-red-600 sm:text-5xl text-3xl font-bold mb-4">
          Discover The Secret of Living Life with Passion!
        </h1>
        {/* <p className="mb-6 text-lg">Here's where I put my thoughts</p> */}

        {/* Buttons */}
        <a className="inline-flex text-white bg-red-600 py-3 px-6 rounded-lg text-lg hover:bg-red-700 cursor-pointer" onClick={makeCall} >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Hero;
