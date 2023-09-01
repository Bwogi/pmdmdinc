import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Dr. Park's Pectus System Set",
    color: "Complete Surgical Set",
    price: "$20,000.00",
    href: "/product/1",
    imageSrc: "/img/product-01.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Pectus Vacuum Device",
    color: "3 sizes available",
    price: "$800",
    href: "/product/2",
    imageSrc: "/img/product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 3,
    name: "Dr. Park's Pectus In-plants",
    color: "Order price based on order quantity",
    price: "$ - ",
    href: "/product/3",
    imageSrc: "/img/product-03.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];

export default function NewProductsFinal() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products
          </h2>
          <Link
            to="https://pect-vac.myshopify.com/"
            className="hidden text-sm font-medium text-green-600 hover:text-green-500 md:block"
          >
            Product Details
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <Link to={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            to="#"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
