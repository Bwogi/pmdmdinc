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
const products = [
  {
    id: 1,
    name: "Park's Pectus System Set",
    href: "/product/1",
    price: "$-",
    description: "Complete Set",
    imageSrc: "/img/parks-system-set.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Pectus Vacuum Device",
    href: "/product/2",
    price: "$-",
    description: "3 sizes available",
    imageSrc: "/img/pectus-vacuum-device.jpg",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Dr. Park's Pectus System Set In-Plants",
    href: "/product/3",
    price: "-",
    description: "Order price based on order quantity",
    imageSrc: "/img/pectus-system-inplants.jpg",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
