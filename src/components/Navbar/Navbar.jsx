
import { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  // MagnifyingGlassIcon,
  // QuestionMarkCircleIcon,
  // ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../../img/logo.jpg'

// const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  pages: [
    { name: 'About Us', to: '/' },
    { name: 'Products', to: '/products' },
    // { name: 'Partners', to: '/partners' },
    { name: 'Contact', to: '/contact' },
  ],
  categories: [
    {
      name: 'Pectus Excavatum',
      featured: [
        {
          name: 'New Arrivals',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Pectus Carinatum',
      featured: [
        {
          name: 'New Arrivals',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          to: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <Link to={item.to} className="mt-6 block text-sm font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                {/* Shop now */}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link to={page.to} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                      {/* Create an account */}
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link to="#" className="-m-2 block p-2 font-medium text-gray-900">
                      {/* Sign in */}
                    </Link>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {/* Currency selector */}
                  <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        {/* Currency */}
                      </label>
                      <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        {/* <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select> */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              
              {/* <form> */}
                {/* <div> */}
                  {/* <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label> */}
                  {/* <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"> */}
                    {/* <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select> */}
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
              {/* </form> */}
              <h1 className='text-transparent'>Pediatric Medical Device Marketing & Distribution LLC.</h1>

              <div className="flex items-center space-x-6">
                <Link to="/login" className="text-sm font-medium text-white hover:text-gray-100">
                  Login
                </Link>
                {/* <a to="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a> */}
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <Link to="/">
                      <span className="sr-only">Pediatric Medical Device Marketing & Distribution LLC</span>
                      <img
                        className="h-[100px] w-auto z-[289]"
                        src={Logo}
                        alt="logo"
                      />
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                          {category.featured.map((item) => (
                                            <div key={item.name} className="group relative">
                                              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                <img
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt}
                                                  className="object-cover object-center"
                                                />
                                              </div>
                                              <Link to={item.to} className="mt-4 block font-medium text-gray-900">
                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                {item.name}
                                              </Link>
                                              <p aria-hidden="true" className="mt-1">
                                                {/* Shop now */}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.to}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <Link to="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      {/* <span className="sr-only">Search</span> */}
                      {/* <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to="/" className="lg:hidden">
                    <span className="sr-only">Pediatric Medical Device Marketing & Distribution LLC</span>
                    <img
                      src={Logo}
                      alt="logo"
                      className="h-[100px] w-auto z-[289]"
                    />
                  </Link>

                  <div className="flex flex-1 items-center justify-end">
                    <Link to="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                      {/* Search */}
                    </Link>

                    <div className="flex items-center lg:ml-8">
                      {/* Help */}
                      <Link to="#" className="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                        <span className="sr-only text-white">Help</span>
                        {/* <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </Link>
                      <Link to="#" className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block">
                        {/* Help */}
                      </Link>

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-8">
                        <Link to="#" className="group -m-2 flex items-center p-2">
                          {/* <ShoppingBagIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          /> */}
                          <span className="ml-2 text-sm font-medium text-white group-hover:text-white">0</span>
                          <span className="sr-only text-white">items in cart, view bag</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}



// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'
// import { Link } from 'react-router-dom'
// import Logo from '../../img/logo.jpg'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }               

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white shadow">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 justify-between">
//               <div className="flex">
//                 <div className="-ml-2 mr-2 flex items-center md:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex flex-shrink-0 items-center">
//                   {/* <img
//                     className="block h-8 w-auto lg:hidden"
//                     src={Logo}
//                     alt="Your Company"
//                   />
//                   <img
//                     className="hidden h-8 w-auto lg:block"
//                     src={Logo}
//                     alt="Your Company"
//                   /> */}
//                 </div>
//                 <div className="hidden md:ml-6 md:flex md:space-x-8">
//                   {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                   <Link
//                     to="/"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/products"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Products
//                   </Link>
//                   <Link
//                     to="/about"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     About Us
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Contact
//                   </Link>
//                   {/* <Link
//                     to="/events"
//                     className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
//                   >
//                     Events
//                   </Link> */}
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <button
//                     type="button"
//                     className="relative inline-flex items-center rounded-md bg-orange-50 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-white hover:border hover:border-gray-200  hover:bg-orange-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     {/* <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" /> */}
//                     <Link to='/products'>Our Catalogue</Link>
//                   </button>
//                 </div>
//                 <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
//                   <button
//                     type="button"
//                     className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div>
//                       <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                           className="h-8 w-8 rounded-full"
//                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                           alt=""
//                         />
//                       </Menu.Button>
//                     </div>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <Link
//                               to="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Your Profile
//                             </Link>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <Link
//                               to="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Settings
//                             </Link>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <Link
//                               to="#"
//                               className={classNames(
//                                 active ? 'bg-gray-100' : '',
//                                 'block px-4 py-2 text-sm text-gray-700'
//                               )}
//                             >
//                               Sign out
//                             </Link>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="md:hidden">
//             <div className="space-y-1 pt-2 pb-3">
//               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//               <Disclosure.Button
//                 as="a"
//                 to="#"
//                 className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6"
//               >
//                 Dashboard
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 to="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
//               >
//                 Team
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 to="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
//               >
//                 Projects
//               </Disclosure.Button>
//               <Disclosure.Button
//                 as="a"
//                 to="#"
//                 className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
//               >
//                 Calendar
//               </Disclosure.Button>
//             </div>
//             <div className="border-t border-gray-200 pt-4 pb-3">
//               <div className="flex items-center px-4 sm:px-6">
//                 <div className="flex-shrink-0">
//                   <img
//                     className="h-10 w-10 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <div className="text-base font-medium text-gray-800">Tom Cook</div>
//                   <div className="text-sm font-medium text-gray-500">tom@example.com</div>
//                 </div>
//                 <button
//                   type="button"
//                   className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>
//               <div className="mt-3 space-y-1">
//                 <Disclosure.Button
//                   as="a"
//                   to="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
//                 >
//                   Your Profile
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   to="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
//                 >
//                   Settings
//                 </Disclosure.Button>
//                 <Disclosure.Button
//                   as="a"
//                   to="#"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
//                 >
//                   Sign out
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }
