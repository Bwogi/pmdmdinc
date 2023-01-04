
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Contact1() {
    return (
        <>
            
            <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                        <div>
                        <h1 className='text-green-800'>Contact Us</h1>
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
                        <p className="mt-1">Mon - Fri 8am to 6pm PST</p>
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                        <EnvelopeIcon className="h-6 w-6 text-green-800" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                        <p>support@pmdmdinc.com</p>
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
                        <PhoneIcon className="h-6 w-6 text-green-800" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                        <p>+1 (209) 684-5576</p>
                        <p className="mt-1">Mon - Fri 8am to 6pm PST</p>
                        </div>
                    </div>
                    <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                        <EnvelopeIcon className="h-6 w-6 text-green-800" aria-hidden="true" />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                        <p>support@pmdmdinc.com</p>
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
                        <span className="ml-3">support@pmdmdinc.com</span>
                        </dd>
                    </div>
                    </dl>
                    <p className="mt-6 text-base text-gray-500">
                    Looking for careers?{' '}
                    <Link to="#" className="font-medium text-gray-700 underline">
                        View all job openings
                    </Link>
                    .
                    </p>
                </div>
                </div>
                <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="mx-auto max-w-lg lg:max-w-none">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="full-name" className="sr-only">
                        Full name
                        </label>
                        <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autoComplete="name"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-green-800 focus:ring-green-800"
                        placeholder="Full name"
                        />
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
                        />
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
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
    
        
  )
}
