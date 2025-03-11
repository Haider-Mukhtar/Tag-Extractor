import Footer from "../components/footer"
import { NavBar } from "../components/navbar"
import PrivacyPolicyBody from "../components/privacy-policy-body"

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white text-center my-10">
        Privacy Policy
      </h1>
      <PrivacyPolicyBody />
      <Footer />
    </>
  )
}

export default PrivacyPolicy