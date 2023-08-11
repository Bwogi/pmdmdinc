import { Link } from "react-router-dom";

const features = [
  { name: "Origin", description: "Developed by  primemedinc.com" },
  {
    name: "Features",
    description:
      "Both titanium and stainless bar options are visible. Pectus bar ends are rounded and smooth to prevent tissue damage. ",
  },
  {
    name: "Benefits",
    description:
      "Excellent clinical results. Prevent bar displacement with outstanding stability. Best cosmetic results. Reduce operating time. Minimal blood loss. Fast recovery.",
  },

  {
    name: "Includes",
    description:
      "This system contains unique devices like the Claw Fixator, Hinge Plate and nuts and bolts.",
  },
  {
    name: "Considerations",
    description:
      "Titanium bars are provided for patients with metal allergies.",
  },
  {
    name: "Other Considerations",
    description: "Hinge plates can be placed medial to the sternum with ease. ",
  },
];

export default function Featured() {
  return (
    <div className="bg-white" id="featured">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-2 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          {/* <h1 className="text-[#C49A69]">Featured Product</h1> */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
            Park's Pectus System Set
          </h2>
          <h3 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl">
            Technical Specifications
          </h3>
          <p className="mt-4 text-gray-500">
            Used in minimally invasive surgical procedures to correct chest wall
            deformities.
          </p>

          <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-start ">
            <button className="border border-1 px-6 py-5 mt-5 rounded-md bg-gray-400 hover:bg-gray-500 text-white">
              <Link to="/surgical-techniques">
                Surgical Techniques using Park's System Set
              </Link>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/img/feature-01.jpg"
            alt="Park's pectus set pic 1"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img/feature-02.jpg"
            alt="Park's pectus set pic 2"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img/feature-03.jpg"
            alt="Park's pectus set pic 3"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/img/feature-04.jpg"
            alt="Park's pectus set pic 4"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
