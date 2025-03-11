import AboutBody from "../components/about-body"
import Footer from "../components/footer"
import { NavBar } from "../components/navbar"

const About = () => {
  return (
    <>
      <NavBar />
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        About Us
      </h1>
      {/* Body */}
      <AboutBody />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default About