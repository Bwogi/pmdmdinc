import SurgicalTechniquesTable from "../SurgicalTechniquesTable/SurgicalTechniquesTable"
// import sgt from "../sgt/sgt"

const features = [
    {
      name: 'Park Technique shows how the Parks Pectus Set is used for Pectus Carinatum Repair',
            description:
              'This video demonstrates the Park Technique for Pectus Carinatum Repair - Sandwich Technique by Hyung Joo Park',
      imageSrc: '/img/video1.jpg',
    imageAlt: 'This video demonstrates the Park Technique for Pectus Carinatum Repair',
      videolink:'https://www.youtube.com/watch?v=7KGHovGOgew&t=190s'
    },
    {
      name: 'Park Technique shows how the Parks Pectus Set is used for Pectus Excavatum Repair',
      description:
        'This video demonstrates the Park                                                                                                                         Technique for Pectus Excavatum Repair - Hyung Joo Park',
      imageSrc: '/img/video2.jpg',
      imageAlt: '',
      videolink:'https://www.youtube.com/watch?v=7KGHovGOgew&t=190s'

    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SurgicalTechniques() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Surgical Techniques using Park's System Set</h2>
            <p className="mt-4 text-gray-500">
              Park's Pectus system set is so easy to use yet so advanced enough to apply the latest and most modern techniques used in surgical theatres today. This section demonstrates how the Park's Pectus System Set is used in the correction of various chest wall deformities.
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
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                  <div className="flex justify-center my-4 ">
                    {/* <button className="border border-1 px-6 py-2 rounded-md bg-green-800 text-white"><Link to="#contact">Buy the Set Now</Link></button> */}
                  </div>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                    {/* <Link to={feature.videolink}><img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" /></Link>  */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div><img src="/img/technique.png" alt="" /></div> */}
          <SurgicalTechniquesTable />
        </div>
      </div>
    )
  }
  