// import Logo from "../Logo/Logo";
// import Navbar from "../Navbar/Navbar";

export default function Header(props) {
    return (
        <div className="mt-10">
            {/* <Logo /> */}
        <div className="mx-auto max-w-7xl py-3 px-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col justfy-center items-center text-center gap-5">
            <h2 className="text-sm rounded-md border border-gray-300 text-gray-400 w-[40%] p-2 bg-orange-50">PEDIATRIC MEDICAL DEVICE MARKETING AND DISTRIBUTION LLC </h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl lg:text-6xl">
            {props.title1}<br/> <span className="text-gray-400">{props.title2}</span> 
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                        { props.title3}</p>
          </div>
        </div>
      </div>
    )
  }
  