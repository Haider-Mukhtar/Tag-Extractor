import { supportEmail } from '../lib/constants';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './ui/animated-modal';

const TermsOfService = () => {
  return (
    <Modal>
              <ModalTrigger className="text-white/80 text-sm hover:text-white hover:underline underline-offset-[3px] group/modal-btn">
                Terms of Service
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h1 className='text-lg font-bold'>
                    Terms of Service
                  </h1>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Acceptance of Terms
                  </h2>
                  <p className='text-sm'>
                    By using YT Tags Extractor, you agree to comply with these Terms of Service. If you do not agree, please discontinue use.
                  </p>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Use of the Service
                  </h2>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      To provide and improve our tag extraction tool.You may use our service for personal or business purposes, provided you do not engage in illegal activities.
                    </li>
                    <li className='text-sm'>
                      You must not use the tool for scraping, data theft, or violating YouTube’s policies.
                    </li>
                    <li className='text-sm'>
                      We reserve the right to modify or discontinue the service at any time.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Intellectual Property
                  </h2>
                  <p className='text-sm'>
                    All content, trademarks, and design elements on YT Tags Extractor are our property. You may not copy, modify, or redistribute our code, logo, or branding without permission.
                  </p>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Disclaimers & Liability
                  </h2>
                  <ul className='list-disc list-inside'>
                    <li className='text-sm'>
                      Our tool is provided as-is without warranties.
                    </li>
                    <li className='text-sm'>
                      We are not responsible for how you use extracted tags or any YouTube policy violations.
                    </li>
                    <li className='text-sm'>
                      We do not guarantee ranking improvements or SEO results.
                    </li>
                  </ul>
                  <h2 className='mt-2 font-semibold text-sm'>
                    Termination of Access
                  </h2>
                  <p className='text-sm'>
                    We may suspend or terminate access to users violating these terms or engaging in abuse.
                  </p>
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

export default TermsOfService