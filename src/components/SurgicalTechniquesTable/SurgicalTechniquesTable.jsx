import  { BsCollectionPlayFill  } from 'react-icons/bs'
const people = [
    { id: 14, technique: 'Magic String Park Technique', desc: 'The Magic String technique is a modified sandwich technique (Park Procedure for Pectus Carinatum Repair).  This is to relieve focal parasternal protrusions after pectus bar repair of PE, which are often emerging in asymmetric deformities. ', link: 'https://www.youtube.com/watch?v=19JLb0tJEIc ' },
    // More people...
  ]
  
  export default function SurgicalTechniquesTable() {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-[100px]">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold  text-gray-600 text-center">More Surgical Techniques using Park's Pectus System Set </h1>
            <h1 className="text-xl  text-gray-400 text-center">The videos below continue to demonstrate the versatility of the Park's Pectus System Set</h1>
            <p className="mt-2 text-sm text-gray-700">
              {/* A list of all the users in your account including their name, title, email and role. */}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            {/* <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            > */}
              {/* Add user */}
            {/* </button> */}
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        No.
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Technique
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                      </th>
                      
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Video</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.technique}<br />{person.desc}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" target="_blank" className="text-green-800 hover:text-green-700">
                            <BsCollectionPlayFill className='text-2xl' /> <span className="sr-only">, {person.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  