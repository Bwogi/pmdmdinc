import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Expertise",
    description:
      "Our team consists of experienced professionals who understand the unique challenges and requirements of pediatric medical devices.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Curation.",
    description:
      "We rigorously evaluate each device, ensuring it meets the highest standards of safety, efficacy, and innovation before introducing it to the market.",
    icon: LockClosedIcon,
  },
  {
    name: "Impact.",
    description:
      "We are driven by the knowledge that every device we introduce has the potential to make a significant positive impact on a child's life.",
    icon: ServerIcon,
  },
  {
    name: "Accessibility.",
    description:
      "By partnering with healthcare providers and institutions, we ensure that these vital medical devices reach those who need them, regardless of geographic location or economic status.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Collaboration.",
    description:
      "We believe in collaborative partnerships that bring together medical experts, device manufacturers, and healthcare providers to foster innovation in pediatric healthcare.",
    icon: LockClosedIcon,
  },
];

export default function WhyPMDMD() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">
                Why
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Pediatric Medical Device Marketing and Distribution LLC?
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a pioneering company dedicated to enhancing the lives of
                children through the provision of innovative, safe, and
                effective medical devices
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-green-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-green-400 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="/img/about-last.jpg"
                  alt="Product screenshot"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
