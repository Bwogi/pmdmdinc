import { Link } from "react-router-dom";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: "Park's Pectus System Set",
    description:
      "The preferred toolkit by Surgeons for use in minimally invasive surgical procedures to correct chest wall deformities.",
    imageSrc: "/img/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
    detailsLink: "/parks-pectus-system",
    orderLink: "/contact",
  },
  // {
  //   name: "Pectus Vacuum Device",
  //   description:
  //     "A pectus vacuum device, also known as a vacuum bell or a chest wall suction cup, is a medical device used in the treatment of pectus excavatum, a congenital chest wall deformity where the breastbone (sternum) and ribs grow abnormally, causing a sunken or caved-in appearance of the chest. This condition can sometimes lead to breathing difficulties and cosmetic concerns.",
  //   imageSrc: "/img/product-feature-07-detail-02.jpg",
  //   imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  //   detailsLink: "/pectus-vacuum-device",
  //   orderLink: "https://pect-vac.myshopify.com/",
  // },
  {
    name: "Park's Pectus System Implants",
    description:
      "Park's pectus system implants are designed to help correct this deformity by gradually reshaping the chest wall. The system typically consists of curved metal bars that are surgically implanted under the chest wall. This treatment is often preferred over traditional surgical procedures that involve more invasive approaches and longer recovery times.",
    imageSrc: "/img/product-feature-07-detail-03.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
    detailsLink: "/product-list",
    orderLink: "/contact",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FeaturedProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-gray-500">
            Here at the Pediatric Medical Device Marketing and Distribution, the
            products showcased here represent a stride towards enhancing patient
            outcomes and transforming the medical landscape. Join us in
            exploring these remarkable solutions that not only exemplify the
            forefront of medical advancement but also reflect our unwavering
            dedication to a healthier world.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h3 className="text-3xl font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to={feature.detailsLink}
                    className="text-sm font-semibold leading-6  text-gray-900 ring-1 hover:ring-gray-400 hover:bg-transparent bg-green-200 ring-green-200 px-6 py-3"
                  >
                    More details
                  </Link>
                  <Link
                    to={feature.orderLink}
                    className="text-sm font-semibold leading-6  text-gray-900 ring-1 hover:ring-[#C39A68] hover:bg-transparent bg-[#C39A68] ring-[#C39A68] px-6 py-3"
                  >
                    <span aria-hidden="true">Order Now →</span>
                  </Link>
                </div>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <Link to={feature.link}>
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-cover object-center"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
