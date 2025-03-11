import ContactForm from "../components/contact-form"
import { NavBar } from "../components/navbar"

const Contact = () => {
  return (
    <div className="pb-8">
      <NavBar />
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Contact Us
      </h1>
      <ContactForm />
    </div>
  )
}

export default Contact