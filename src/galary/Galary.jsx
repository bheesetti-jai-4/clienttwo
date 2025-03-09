
import { useNavigate } from "react-router-dom";
import data from "../store/Images"
const Galary = () => {
  const sports =data.imagemin;
  const navagate = useNavigate()
    // const sports = [
    //   {
    //     img: "https://iili.io/33etOiX.png",
    //     title: " Golf",
    //     description: "Everything you need for any course",
    //   },
    //   {
    //     img: "https://iili.io/33etkfn.png",
    //     title: " Basketball",
    //     description: "Styles made for your games.",
    //   },
    //   {
    //     img: "https://iili.io/33etvls.png",
    //     title: " Running",
    //     description: "Everything you need for adventure.",
    //   },
    // ];
  
    return (
      <section className="w-full bg-gray-300 py-9 px-6">
        <div className="mx-auto max-w-[1160px]">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h2 className="text-4xl font-bold font-['Roboto']">Galary</h2>
            <p className="text-gray-700 mt-2 px-4 sm:px-8 md:px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores omnis reprehenderit accusamus numquam perspiciatis quaerat.
            </p>
          </header>
  
          {/* Cards Section */}
          <main className="flex flex-col md:flex-row items-center gap-10">
            {sports.map((sport, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <img
                  className="mb-4 rounded-xl  object-cover mx-auto block"
                  src={sport.image}
                  alt={sport.title}
                />
                <div className="text-center">
                  {/* <h3 className="text-2xl font-bold font-['Roboto']">{sport.title}</h3> */}
                  {/* <p className="mt-2 mb-4 text-sm text-gray-600">{sport.description}</p> */}
                  <button className="  bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all" 
                  onClick={()=>{navagate("/galary")}}
                  >
                    visit more
                  </button>
                </div>
              </div>
            ))}
          </main>
        </div>
      </section>
    );
  };
  
  export default Galary;
  