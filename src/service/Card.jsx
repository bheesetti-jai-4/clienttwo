// const Card = () => {
//     const sports = [
//       {
//         img: "https://iili.io/33etOiX.png",
//         title: "Keni Golf",
//         description: "Everything you need for any course",
//       },
//       {
//         img: "https://iili.io/33etkfn.png",
//         title: "Keni Basketball",
//         description: "Styles made for your games.",
//       },
//       {
//         img: "https://iili.io/33etvls.png",
//         title: "Keni Trail Running",
//         description: "Everything you need for adventure.",
//       },
//     ];
  
//     return (
//       <section className="w-full bg-gray-300  py-9 px-8">
//         <div className="mx-auto max-w-[1160px]">
//           <header className="h-50 m-8  flex justify-center items-center">
//             <div>
//             <h2 className=" text-center  text-2xl font-bold font-['Roboto']">
//               Shop by Sport
//             </h2>
//             <p className="p-1 m-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores omnis autem reprehenderit quis accusamus numquam perspiciatis quaerat porro nesciunt aperiam libero distinctio sequi praesentium, quia tempore odit vel saepe.</p>
//             </div>
            
//           </header>
//           <main className="flex flex-col md:flex-row items-center gap-10">
//             {sports.map((sport, index) => (
//               <div key={index}>
//                 <img className="mb-2 rounded-xl" src={sport.img} alt={sport.title} />
//                 <div className="flex flex-col items-center" >
//                   <h3 className=" text-2xl font-bold font-['Roboto']">
//                     {sport.title}
//                   </h3>
//                   <p className="mt-1 mb-3  text-sm font-normal font-['Roboto']">
//                     {sport.description}
//                   </p>
//                   <button className="text-white  bg-red-600 p-2 rounded-lg text-sm font-semibold font-['Roboto'] ">Lern more</button>
//                 </div>
//               </div>
//             ))}
//           </main>
//         </div>
//       </section>
//     );
//   };
  
//   export default Card;
  

import { useNavigate } from "react-router-dom";
import data from "../store/Service"
const Card = () => {

  const small = data.servicemin;
  const navagate = useNavigate()
  
    return (
      <section className="w-full bg-gray-300 py-9 px-6">
        <div className="mx-auto max-w-[1160px]">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold font-['Roboto']">Services</h2>
            <p className="text-gray-700 mt-2 px-4 sm:px-8 md:px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores omnis reprehenderit accusamus numquam perspiciatis quaerat.
            </p>
          </header>
  
          {/* Cards Section */}
          <main className="flex flex-col md:flex-row items-center gap-10">
            {small.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <img
                  className="mb-4 rounded-xl  object-cover mx-auto block"
                  src={item.image}
                  alt={item.title}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-['Roboto']">{item.title}</h3>
                  <p className="mt-2 mb-4 text-sm text-gray-600">{item.description}</p>
                  <button className="  bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all" 
                  onClick={()=>{navagate("/service")}}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    );
  };
  
  export default Card;
  