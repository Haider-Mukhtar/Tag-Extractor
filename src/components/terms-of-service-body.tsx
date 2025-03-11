import { supportEmail } from "../lib/constants"

const TermsOfServiceBody = () => {
  return (
                <div className="rounded-xl border border-white/10 text-white bg-white/10 backdrop-blur-lg p-6 my-10 text-base">
                  <h2 className='mt-2 font-semibold text-lg'>
                    Acceptance of Terms
                  </h2>
                  <p>
                    By using YT Tags Extractor, you agree to comply with these Terms of Service. If you do not agree, please discontinue use.
                  </p>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Use of the Service
                  </h2>
                  <ul className='list-disc list-inside'>
                    <li>
                      To provide and improve our tag extraction tool.You may use our service for personal or business purposes, provided you do not engage in illegal activities.
                    </li>
                    <li>
                      You must not use the tool for scraping, data theft, or violating YouTube’s policies.
                    </li>
                    <li>
                      We reserve the right to modify or discontinue the service at any time.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Intellectual Property
                  </h2>
                  <p>
                    All content, trademarks, and design elements on YT Tags Extractor are our property. You may not copy, modify, or redistribute our code, logo, or branding without permission.
                  </p>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Disclaimers & Liability
                  </h2>
                  <ul className='list-disc list-inside'>
                    <li>
                      Our tool is provided as-is without warranties.
                    </li>
                    <li>
                      We are not responsible for how you use extracted tags or any YouTube policy violations.
                    </li>
                    <li>
                      We do not guarantee ranking improvements or SEO results.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-lg'>
                    Termination of Access
                  </h2>
                  <p>
                    We may suspend or terminate access to users violating these terms or engaging in abuse.
      </p>
      <div className="mt-4">
              <span>For any privacy concerns, contact us at</span>&nbsp;
              <a href='#' className='text-blue-500 hover:underline'>
                                {supportEmail}
                              </a>
            </div>
                </div>
  )
}

export default TermsOfServiceBody