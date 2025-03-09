
// function DoctorProfile() {
//     return (
//       <>


  
//   <div className="flex pt-6 px-1 md:px-20  items-center justify-center bg-hero h-200 overflow-hidden">
//       <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//               <img src="/doctor.jpg" alt="name" className=" object-cover mx-auto block rounded-lg" />
//           </div>
//           <div className="w-full md:w-1/2 lg:pr-32">
//               <h2 className="text-4xl lg:text-5xl text-center md:text-left text-red-600 leading-tight font-medium">Dr. John Doe, MD.</h2>
  
//               <h1 className=" text-rose-500 font-bold  md: text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed" > MBBS, MD (Cardiology) – Specialist
//               </h1>
  
  
  
//               <h3
//                   className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                  
//                   "Passionate about heart health and patient care, Dr. John Doe specializes in minimally invasive procedures for heart disease. With over 15 years of experience, he has successfully treated thousands of patients, helping them live healthier lives. He believes in combining advanced medical technology with compassionate care to achieve the best results."
//               </h3>
              
//           </div>
//       </div>
//   </div>
  
//       </>
//     )
//   }
  
//   export default DoctorProfile

function DoctorProfile() {
    return (
      <>
      <div className="flex pt-6 px-4 md:px-20 items-center justify-center bg-hero min-h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] flex justify-center">
              <img 
                src="/doctor.jpg" 
                alt="Dr. John Doe" 
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-red-600 leading-tight font-medium">
              Dr. John Doe, MD.
            </h2>

            <h1 className="text-rose-500 font-bold text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              MBBS, MD (Cardiology) – Specialist
            </h1>

            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              "Passionate about heart health and patient care, Dr. John Doe specializes in minimally invasive procedures for heart disease. With over 15 years of experience, he has successfully treated thousands of patients, helping them live healthier lives. He believes in combining advanced medical technology with compassionate care to achieve the best results."
            </h3>
          </div>
          
        </div>
      </div>
        </>
    );
}

export default DoctorProfile;
