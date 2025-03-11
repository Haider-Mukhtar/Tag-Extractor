import { supportEmail } from '../lib/constants';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './ui/animated-modal';

const PrivacyPolicy = () => {
  return (
    <Modal>
              <ModalTrigger className="text-white/80 text-sm hover:text-white hover:underline underline-offset-[3px] group/modal-btn">
                Privacy Policy
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h1 className='text-lg font-bold'>
                    Privacy Policy
                  </h1>
                  <p className='mt-2 text-sm'>
                    At YT Tags Extractor, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
                  </p>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Information We Collect
                  </h2>
                  <p className='text-sm'>
                    When you use our service, we may collect the following types of data:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      Personal Information: If you contact us, we may collect your name, email address, and any other details you provide.
                    </li>
                    <li className='text-sm'>
                      Usage Data: We collect non-personal data such as IP address, browser type, and website interactions for analytics and improvement.
                    </li>
                    <li className='text-sm'>
                      Cookies & Tracking Technologies: We may use cookies to enhance your experience. You can manage cookie preferences through your browser settings.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-sm'>
                    How We Use Your Information
                  </h2>
                  <p className='text-sm'>
                    We use collected data for the following purposes:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      To provide and improve our tag extraction tool.
                    </li>
                    <li className='text-sm'>
                    To analyze website traffic and user behavior.
                    </li>
                    <li className='text-sm'>
                      To respond to your inquiries and provide support.
                    </li>
                    <li className='text-sm'>
                      To prevent fraud and ensure website security.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Data Sharing & Security
                  </h2>
                  <p className='text-sm'>
                    We do not sell or share your personal data with third parties except:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      When required by law.
                    </li>
                    <li className='text-sm'>
                      To trusted service providers that help us operate our platform (e.g., analytics, hosting).
                    </li>
                    <li className='text-sm'>
                      To protect our rights, users, and website security.
                    </li>
                    <li className='text-sm'>
                      Your data is securely stored, and we take precautions to prevent unauthorized access.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Your Rights & Choices
                  </h2>
                  <p className='text-sm'>
                  You have the right to:
                  </p>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      Request access to the data we collect.
                    </li>
                    <li className='text-sm'>
                      Opt out of cookies and analytics tracking.
                    </li>
                    <li className='text-sm'>
                      Request deletion of your personal data.
                    </li>
                  </ul>
                </ModalContent>
                <ModalFooter className="gap-4">
                  <a href='#' className='text-blue-500 hover:underline'>
                    {supportEmail}
                  </a>
                </ModalFooter>
              </ModalBody>
            </Modal>
  )
}

export default PrivacyPolicy