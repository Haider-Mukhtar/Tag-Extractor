import { supportEmail } from "../lib/constants"

const PrivacyPolicyBody = () => {
  return (
                <div className="rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg p-6 my-10 text-base">
                  <p>
                    At YT Tags Extractor, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
                  </p>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Information We Collect
                  </h2>
                  <p>
                    When you use our service, we may collect the following types of data:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li>
                      Personal Information: If you contact us, we may collect your name, email address, and any other details you provide.
                    </li>
                    <li>
                      Usage Data: We collect non-personal data such as IP address, browser type, and website interactions for analytics and improvement.
                    </li>
                    <li>
                      Cookies & Tracking Technologies: We may use cookies to enhance your experience. You can manage cookie preferences through your browser settings.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-lg'>
                    How We Use Your Information
                  </h2>
                  <p>
                    We use collected data for the following purposes:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li>
                      To provide and improve our tag extraction tool.
                    </li>
                    <li>
                    To analyze website traffic and user behavior.
                    </li>
                    <li>
                      To respond to your inquiries and provide support.
                    </li>
                    <li>
                      To prevent fraud and ensure website security.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Data Sharing & Security
                  </h2>
                  <p>
                    We do not sell or share your personal data with third parties except:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li>
                      When required by law.
                    </li>
                    <li>
                      To trusted service providers that help us operate our platform (e.g., analytics, hosting).
                    </li>
                    <li>
                      To protect our rights, users, and website security.
                    </li>
                    <li>
                      Your data is securely stored, and we take precautions to prevent unauthorized access.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Your Rights & Choices
                  </h2>
                  <p>
                  You have the right to:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li>
                      Request access to the data we collect.
                    </li>
                    <li>
                      Opt out of cookies and analytics tracking.
                    </li>
                    <li>
                      Request deletion of your personal data.
                    </li>
      </ul>
      <div className="mt-4">
        <span>For any privacy concerns, contact us at</span>&nbsp;
        <a href='#' className='text-blue-500 hover:underline'>
                          {supportEmail}
                        </a>
      </div>
                </div>
  )
}

export default PrivacyPolicyBody