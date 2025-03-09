import Galary from "../galary/Galary"
import Footer from "../navbar/Footer"
import Navbar from "../navbar/Navbar"
import DoctorProfile from "../profile/DoctorProfile"
import Card from "../service/Card"
import Testimonial from "../testimonials/Testimonials"
import Hero from "./Hero"
import Maps from "./Maps"
import Numbers from "./Numbers"

function Home() {
  return (
    <>
    <Hero/>
    <Numbers/>
    <DoctorProfile/>
    <Card/>
    <Testimonial/>
    <Galary/>
    <Maps/>
    <Footer/>
    </>
  )
}

export default Home