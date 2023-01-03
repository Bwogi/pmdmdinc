const features = [
    { name: 'Origin', description: 'Developed by  primemedinc.com' },
    { name: 'Features', description: "It provides both titanium and stainless bar options. Pectus bar's rounded and smooth ends prevent tissue damages. " },
    { name: 'Benefits', description: 'Minimally invasive technique with excellent result. Prevent bar displacement with excellent stability. Best cosmetic result. Reducing operating time. Minimal blood loss. Fast recovery.' },
   
    { name: 'Includes', description: 'This system consists of unique and special devices like the Claw Fixator and Hinge Plate used in surgical procedures of chest wall deformities' },
    { name: 'Considerations', description: "It provides both titanium and stainless bar options. Titanium is provided to patients with nickel allergies." },
     { name: 'Act Now!!!', description: 'A Huge discount is available for this top of the entire systems set. ' },
  ]
  
  export default function Featured() {
    return (
        <div className="bg-white" id='featured'>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-2 px-4 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h1 className="text-green-800">Featured Product</h1>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Park's Pectus System Set</h2>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl">The set's Technical Specifications</h3>
            <p className="mt-4 text-gray-500">
            This entire system set is used in a minimally invasive surgical procedures to correct all chest wall deformities.
            </p>
  
            <dl className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
                    </dl>
                    <div className="flex justify-end ">
                        <button className="border border-1 px-6 py-2 rounded-md bg-green-800 text-white"><a href="#contact">Place your order now</a></button>
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
    )
  }
  