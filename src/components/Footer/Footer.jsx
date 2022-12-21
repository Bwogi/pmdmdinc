const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 Pediatric Medical Device Marketing & Distribution, Inc. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  


// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//     return (
//         <>
//             <div className="xl:px-20 sm:px-10 px-4 py-20">
//                 <div className="bg-gray-100">
//                     <div className="flex sm:flex-row flex-col flex-wrap items-center justify-between w-full xl:px-64 px-6 pt-8 pb-10 border-b border-gray-300">
//                         <div className="flex flex-col items-center md:mt-0 mt-8">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justifty-center">
//                                 <div className="flex items-center justify-center w-full ">
                                    
//                                     <a href="tel:+14155355362" >
//                                         <svg  aria-label="phone number" width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M4.375 3.49985H7.875L9.625 7.87485L7.4375 9.18735C8.37459 11.0874 9.91241 12.6253 11.8125 13.5623L13.125 11.3748L17.5 13.1248V16.6248C17.5 17.089 17.3156 17.5341 16.9874 17.8623C16.6592 18.1905 16.2141 18.3748 15.75 18.3748C12.3369 18.1674 9.11763 16.718 6.69973 14.3001C4.28182 11.8822 2.83242 8.66299 2.625 5.24985C2.625 4.78572 2.80937 4.3406 3.13756 4.01241C3.46575 3.68422 3.91087 3.49985 4.375 3.49985Z" fill="#1F2937" />
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>
//                             <p className="text-base leading-4 mt-4 text-gray-800 hover:text-green-600 "><a href="tel:+14155355362" >+1 (415) 535 5362</a></p>
//                         </div>
//                         <div className="flex flex-col items-center md:mt-0 mt-8 md:mx-0 sm:mx-4">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justifty-center">
//                                 <div className="flex items-center justify-center w-full">
//                                     <svg aria-label="email address" width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M16.625 4.37503H4.375C3.4085 4.37503 2.625 5.15853 2.625 6.12503V14.875C2.625 15.8415 3.4085 16.625 4.375 16.625H16.625C17.5915 16.625 18.375 15.8415 18.375 14.875V6.12503C18.375 5.15853 17.5915 4.37503 16.625 4.37503Z" fill="#1F2937" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
//                                         <path d="M2.625 6.12497L10.5 11.375L18.375 6.12497" fill="#1F2937" />
//                                         <path d="M2.625 6.12497L10.5 11.375L18.375 6.12497" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <p className="text-base leading-4 mt-4 text-gray-800  hover:text-green-600"><a href="mailto:info@pmdmdllc.com">info@pmdmdllc.com</a> </p>
//                         </div>
//                         <div className="flex flex-col items-center md:mt-0 mt-8 md:w-auto w-full">
//                             <div className="w-14 h-14 rounded-full bg-white flex items-center justifty-center">
//                                 <div className="flex items-center justify-center w-full">
//                                     <svg aria-label="Location" width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M10.5 9.1875C11.2249 9.1875 11.8125 8.59987 11.8125 7.875C11.8125 7.15013 11.2249 6.5625 10.5 6.5625C9.77513 6.5625 9.1875 7.15013 9.1875 7.875C9.1875 8.59987 9.77513 9.1875 10.5 9.1875Z" fill="#1F2937" />
//                                         <path
//                                             d="M10.5 1.3125C6.8816 1.3125 3.9375 4.12822 3.9375 7.58789C3.9375 9.23549 4.6885 11.4265 6.16957 14.1004C7.35902 16.2471 8.7351 18.1884 9.45082 19.1543C9.57176 19.3193 9.72989 19.4536 9.91239 19.5461C10.0949 19.6386 10.2966 19.6868 10.5012 19.6868C10.7058 19.6868 10.9076 19.6386 11.0901 19.5461C11.2726 19.4536 11.4307 19.3193 11.5516 19.1543C12.2661 18.1884 13.6434 16.2471 14.8329 14.1004C16.3115 11.4274 17.0625 9.23631 17.0625 7.58789C17.0625 4.12822 14.1184 1.3125 10.5 1.3125ZM10.5 10.5C9.98082 10.5 9.47331 10.346 9.04163 10.0576C8.60995 9.76917 8.2735 9.3592 8.07482 8.87954C7.87614 8.39989 7.82415 7.87209 7.92544 7.36289C8.02672 6.85369 8.27673 6.38596 8.64384 6.01884C9.01096 5.65173 9.47869 5.40172 9.98789 5.30044C10.4971 5.19915 11.0249 5.25114 11.5045 5.44982C11.9842 5.6485 12.3942 5.98495 12.6826 6.41663C12.971 6.84831 13.125 7.35582 13.125 7.875C13.1242 8.57096 12.8474 9.2382 12.3553 9.73032C11.8632 10.2224 11.196 10.4992 10.5 10.5Z"
//                                             fill="#1F2937"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <p className="text-base leading-4 mt-4 text-gray-800">P.O.BOX 1755, Lafayette, CA 94549, USA</p>
//                         </div>
//                     </div>
//                     <div className="pt-7 pb-14 xl:px-64 px-6">
//                         <div className="flex-wrap flex items-start justify-between">
//                             <div className="flex-wrap flex items-start md:pb-0 sm:pb-8">
//                                 <div>
//                                     <h2 className="text-base font-medium focus:outline-none leading-4 text-gray-800">About</h2>
//                                     <p className="text-base focus:outline-none cursor-pointer leading-4 mt-6 text-gray-600">
//                                         <Link to="javascript:void(0)">Our Story</Link>
//                                     </p>
//                                     <p className="text-base focus:outline-none cursor-pointer leading-4 mt-4 text-gray-600">
//                                         <Link to="javascript:void(0)">Awards</Link>
//                                     </p>
//                                     <p className="text-base focus:outline-none cursor-pointer leading-4 mt-4 text-gray-600">
//                                         <Link to="javascript:void(0)">Our Team</Link>
//                                     </p>
//                                 </div>
//                                 <div className="ml-20 mr-4">
//                                     <h2 className="text-base font-medium focus:outline-none leading-4 text-gray-800">Company</h2>
//                                     <p className="text-base cursor-pointer focus:outline-none leading-4 mt-6 text-gray-600">
//                                         <Link to="javascript:void(0)">Our Service</Link>
//                                     </p>
//                                     <p className="text-base cursor-pointer focus:outline-none leading-4 mt-4 text-gray-600">
//                                         <Link to="javascript:void(0)">Clients</Link>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="sm:w-auto w-full sm:-mt-1 mt-8 md:ml-0 ml-0">
//                                 <label className="text-base font-bold leading-4 text-gray-800">Subscribe</label>
//                                 <div className="mt-4 sm:w-72 w-full relative bg-white">
//                                     <input type="email" className="w-full pl-4 py-4 pr-8 focus:border-indigo-800 border border-transparent text-base leading-none text-gray-800 placeholder-gray-800 focus:outline-none h-full" placeholder="Email Address" />
//                                     <button role="button" aria-label="send email address" className="focus:outline-none rounded-full absolute right-0 top-0 mt-5 mr-2 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
//                                         <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M3.33301 8H12.6663" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 10.6667L12.6667 8" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
//                                             <path d="M10 5.33333L12.6667 7.99999" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



// // import { Link } from "react-router-dom"
// // const navigation = {
// //     solutions: [
// //       { name: 'Marketing', href: '#' },
// //       { name: 'Analytics', href: '#' },
// //       { name: 'Commerce', href: '#' },
// //       { name: 'Insights', href: '#' },
// //     ],
// //     support: [
// //       { name: 'Pricing', href: '#' },
// //       { name: 'Documentation', href: '#' },
// //       { name: 'Guides', href: '#' },
// //       { name: 'API Status', href: '#' },
// //     ],
// //     company: [
// //       { name: 'About', href: '#' },
// //       { name: 'Blog', href: '#' },
// //       { name: 'Jobs', href: '#' },
// //       { name: 'Press', href: '#' },
// //       { name: 'Partners', href: '#' },
// //     ],
// //     legal: [
// //       { name: 'Claim', href: '#' },
// //       { name: 'Privacy', href: '#' },
// //       { name: 'Terms', href: '#' },
// //     ],
// //     social: [
// //       {
// //         name: 'Facebook',
// //         href: '#',
// //         icon: (props) => (
// //           <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
// //             <path
// //               fillRule="evenodd"
// //               d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //       },
// //       {
// //         name: 'Instagram',
// //         href: '#',
// //         icon: (props) => (
// //           <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
// //             <path
// //               fillRule="evenodd"
// //               d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //       },
// //       {
// //         name: 'Twitter',
// //         href: '#',
// //         icon: (props) => (
// //           <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
// //             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// //           </svg>
// //         ),
// //       },
// //       {
// //         name: 'GitHub',
// //         href: '#',
// //         icon: (props) => (
// //           <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
// //             <path
// //               fillRule="evenodd"
// //               d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //       },
// //       {
// //         name: 'Dribbble',
// //         href: '#',
// //         icon: (props) => (
// //           <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
// //             <path
// //               fillRule="evenodd"
// //               d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //       },
// //     ],
// //   }
  
// //   export default function Footer() {
// //     return (
// //       <footer className="bg-gray-800" aria-labelledby="footer-heading">
// //         <h2 id="footer-heading" className="sr-only">
// //           Footer
// //         </h2>
// //         <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
// //           <div className="xl:grid xl:grid-cols-3 xl:gap-8">
// //             <div className="grid grid-cols-2 gap-8 xl:col-span-2">
// //               <div className="md:grid md:grid-cols-2 md:gap-8">
// //                 <div>
// //                   <h3 className="text-base font-medium text-white">Solutions</h3>
// //                   <ul className="mt-4 space-y-4">
// //                     {navigation.solutions.map((item) => (
// //                       <li key={item.name}>
// //                         <Link to={item.href} className="text-base text-gray-300 hover:text-white">
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div className="mt-12 md:mt-0">
// //                   <h3 className="text-base font-medium text-white">Support</h3>
// //                   <ul  className="mt-4 space-y-4">
// //                     {navigation.support.map((item) => (
// //                       <li key={item.name}>
// //                         <a href={item.href} className="text-base text-gray-300 hover:text-white">
// //                           {item.name}
// //                         </a>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="md:grid md:grid-cols-2 md:gap-8">
// //                 <div>
// //                   <h3 className="text-base font-medium text-white">Company</h3>
// //                   <ul className="mt-4 space-y-4">
// //                     {navigation.company.map((item) => (
// //                       <li key={item.name}>
// //                         <Link to={item.href} className="text-base text-gray-300 hover:text-white">
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <div className="mt-12 md:mt-0">
// //                   <h3 className="text-base font-medium text-white">Legal</h3>
// //                   <ul  className="mt-4 space-y-4">
// //                     {navigation.legal.map((item) => (
// //                       <li key={item.name}>
// //                         <Link to={item.href} className="text-base text-gray-300 hover:text-white">
// //                           {item.name}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="mt-8 xl:mt-0">
// //               <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
// //               <p className="mt-4 text-base text-gray-300">
// //                 The latest news, articles, and resources, sent to your inbox weekly.
// //               </p>
// //               <form className="mt-4 sm:flex sm:max-w-md">
// //                 <label htmlFor="email-address" className="sr-only">
// //                   Email address
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email-address"
// //                   id="email-address"
// //                   autoComplete="email"
// //                   required
// //                   className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //                   placeholder="Enter your email"
// //                 />
// //                 <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
// //                   <button
// //                     type="submit"
// //                     className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
// //                   >
// //                     Subscribe
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //           <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
// //             <div className="flex space-x-6 md:order-2">
// //               {navigation.social.map((item) => (
// //                 <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
// //                   <span className="sr-only">{item.name}</span>
// //                   <item.icon className="h-6 w-6" aria-hidden="true" />
// //                 </a>
// //               ))}
// //             </div>
// //             <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
// //               &copy; 2020 Your Company, Inc. All rights reserved.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>
// //     )
// //   }
  