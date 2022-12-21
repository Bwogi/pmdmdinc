import React from "react";

function Table() {
    return (
        <>
            <div className="xl:w-3/4 2xl:w-4/5 w-full bg-white rounded-lg shadow">
                <div className=" pl-8">
                        <h1 className="text-base md:text-lg lg:text-3xl text-gray-800 text-center">Park's <span className="text-gray-400">Modified Pectus</span> Bar</h1>
                </div>
                <div className="border rounded-lg border-gray-100">
                    <div className="py-4 md:py-6 pl-8">
                        <p className="text-base md:text-lg lg:text-xl leading-tight text-gray-800">Modified Pectus Bar - Rounded end</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                                <tr className="bg-orange-100 h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-8 text-center" colspan="2">Cat#</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center">Description</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center">Thickness</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center" colspan="2">Cat#</th>
                                    <th className="font-normal text-left text-center">Description</th>
                                    <th className="font-normal text-left text-center">Thickness</th>
                                </tr>
                                <tr className="bg-orange-50 h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-8 text-center">Titanium<br />Alloy</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center">Stainless<br />Steel</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0"></th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0"></th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center">Titanium<br />Alloy</th>
                                    <th className="font-normal text-left px-10 lg:px-6 xl:px-0 text-center">Stainless<br />Steel</th>
                                    <th className="font-normal text-left"></th>
                                    <th className="font-normal text-left"></th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-206</td>
                                    <td className="pl-8">
                                    PPE-206S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 6"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-306</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-306S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 6"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-207</td>
                                    <td className="pl-8">
                                    PPE-207S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 7"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-307</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-307S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 7"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-208</td>
                                    <td className="pl-8">
                                    PPE-208S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 8"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                       
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-308</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-308S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 8"</td>
                                    <td>
                                      
                                    </td>
                                    
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800">
                                    <td className="pl-8">PPE-209</td>
                                    <td className="pl-8">
                                    PPE-209S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 9"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        <span className="font-bold"></span>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-309</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-309S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 9"</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-210</td>
                                    <td className="pl-8">
                                    PPE-210S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 10"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-310</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-310S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 10"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-211</td>
                                    <td className="pl-8">
                                    PPE-211S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 11"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-311</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-311S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 11"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-212</td>
                                    <td className="pl-8">
                                    PPE-212S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 12"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                    <span className="font-bold">2.88mm</span>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-312</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-312S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 12"</td>
                                    <td>
                                    <span className="font-bold">3.00mm</span>
                                    </td>
                                    
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800">
                                    <td className="pl-8">PPE-213</td>
                                    <td className="pl-8">
                                    PPE-213S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 13"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-313</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-313S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 13"</td>
                                    <td>
                                    
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-214</td>
                                    <td className="pl-8">
                                    PPE-214S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 14"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-314</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                        <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-314S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 14"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-215</td>
                                    <td className="pl-8">
                                    PPE-215S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 15"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-315</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-315S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 15"</td>
                                    <td>
                                       
                                    </td>
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800 border-b border-gray-100">
                                    <td className="pl-8">PPE-216</td>
                                    <td className="pl-8">
                                    PPE-216S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 16"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                       
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-316</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-316</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 16"</td>
                                    <td>
                                      
                                    </td>
                                    
                                </tr>
                                <tr className="h-10 text-sm leading-none text-gray-800">
                                    <td className="pl-8">PPE-217</td>
                                    <td className="pl-8">
                                    PPE-217S
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 17"</td>
                                    <td className="font-medium px-10 lg:px-6 xl:px-0">
                                        <span className="font-bold"></span>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <p className="pl-8">PPE-317</p>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">
                                    <div className="px-10 lg:px-6 xl:px-0">
                                        <p className="pl-8">PPE-317S</p>
                                        </div>
                                    </td>
                                    <td className="px-10 lg:px-6 xl:px-0">Modified Pectus bar, 17"</td>
                                    <td>
                                    </td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
