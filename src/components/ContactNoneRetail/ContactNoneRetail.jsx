// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";

export default function ContactNonRetail() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Park's Pectus System Orders
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Dear valued customer, <br />
                <br />
                We appreciate your interest in the Parks Pectus System Set, a
                cutting-edge medical solution designed to enhance patient care
                in hospital and operating theater environments. <br />
                <br />
                To place an order for this advanced system, kindly use the
                contact form below to fill out the form with your details, and
                our dedicated team will promptly respond to your request.
                <br />
                <br /> We look forward to serving your needs and supporting your
                mission to provide the best care to your patients.
              </p>
            </div>
            {/* <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
              Park's System Implant & Instrument Orders
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Dear esteemed customer,
                <br /> <br />
                Thank you for considering Park's Pectus System Set to enhance
                your hospital or operating theater's capabilities. We understand
                that selecting the right equipment for your facility is a
                critical decision, and we are here to assist you every step of
                the way. <br />
                <br /> To ensure that your order aligns perfectly with your
                needs, we encourage you to compile a list of{" "}
                <Link to="/product-list">
                  <span className="font-bold">
                    Park's System Implants & Instruments
                  </span>
                </Link>{" "}
                that you are interested in, tailored to your specific
                requirements and preferences. <br />
                <br /> Once you have your list ready, please proceed to fill out
                the contact form on this page and our dedicated team is
                committed to providing you with the necessary information,
                guidance, and support throughout the ordering process. <br />
                <br />
                Your satisfaction is our priority.
                <br />
                <br /> We look forward to helping you deliver exceptional care
                in your healthcare facility.
              </p>
            </div>
            {/* <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
