import Footer from "../components/footer"
import { NavBar } from "../components/navbar"
import TermsOfServiceBody from "../components/terms-of-service-body"

const TermofService = () => {
  return (
    <>
      <NavBar />
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Term of Service
      </h1>
      <TermsOfServiceBody />
      <Footer />
    </>
  )
}

export default TermofService