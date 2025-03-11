import ContactForm from "../components/contact-form"
import Footer from "../components/footer"
import { NavBar } from "../components/navbar"

const Contact = () => {
  return (
    <>
      <NavBar />
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Contact Us
      </h1>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact