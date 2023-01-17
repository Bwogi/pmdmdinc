
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact1() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rv17dht', 'template_r04xusa', e.target, 'N-mLmSDWIHSghOvx3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                        <div>
                            <h1 className='text-[#C49A69]'>Contact Us</h1>    
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Please get in touch with our expert support team for all your sales support questions. The team is ready to answer all your questions. 
                                </p>
                            </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-green-800" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+1 (209) 684-5576</p>
                                    <p className="mt-1">Mon - Fri 8am to 5pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-[#C49A69]" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>info@pmdmdllc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 md:mt-0">
                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Technical Support</h2>
                        <div className="mt-3">
                            <p className="text-lg text-gray-500">
                            Please get in touch with our expert support team for all your technical support questions. The team is ready to answer all your questions. 
                            </p>
                        </div>
                        <div className="mt-9">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <PhoneIcon className="h-6 w-6 text-[#C49A69]" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>+1 (209) 684-5576</p>
                                    <p className="mt-1">Mon - Fri 8am to 5pm PST</p>
                                </div>
                            </div>
                            <div className="mt-6 flex">
                                <div className="flex-shrink-0">
                                    <EnvelopeIcon className="h-6 w-6 text-green-800" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>info@pmdmdllc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-white"  >
                <div className="absolute inset-0">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
                </div>
                <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
                    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="mx-auto max-w-lg">  
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                            Please get in touch with our expert support team, we will answer all your questions.
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div>
                                    <dt className="sr-only">Postal address</dt>
                                    <dd>
                                    <p>P.O.Box 1755,</p>
                                    <p>Lafayette, CA 94549, USA</p>
                                    </dd>
                                </div>
                                <div className="mt-6">
                                    <dt className="sr-only">Phone number</dt>
                                    <dd className="flex">
                                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">+1 (209) 684-5576</span>
                                    </dd>
                                </div>
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    <span className="ml-3">info@pmdmdllc.com</span>
                                    </dd>
                                </div>
                            </dl>
                            <div className='mt-10 w-[150px] h-[150px] ml-10'>
                                <img src="/img/logo.jpg" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="mx-auto max-w-lg lg:max-w-none">
                            <form className="grid grid-cols-1 gap-y-6" onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                    Full name
                                    </label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                                    placeholder="Full name"
                                    required />
                                </div>
                            
                                            
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                    Email
                                    </label>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                                    placeholder="Email"
                                    required
                                    />
                                </div>

                                            
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                    Phone
                                    </label>
                                    <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                                    placeholder="Phone"
                                    required
                                    />
                                </div>
                                            
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                    Subject
                                    </label>
                                    <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    autoComplete="subject"
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                                    placeholder="Subject"
                                    required
                                    />
                                </div>
                                            
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                    Message
                                    </label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                                    placeholder="Message"
                                    defaultValue={''}
                                    required />
                                </div>
                                            {/* checkboxes */}
                                            
                                <div>
                                    <input type="checkbox" id="check" name="wholekit" value="wholekit" />
                                    <label for="wholekit" className='text-gray-500'> I want the whole Kit(Park's Pectus System Set)</label><br />
                                    <input type="checkbox" id="check" name="accessory" value="Accessory"  />
                                    <label for="accessory" className='text-gray-500'> I want to buy an  Accessory or spare part(s)</label><br />
                                </div>
                                            
                                <div>
                                    <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
                                    >
                                    Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )}
