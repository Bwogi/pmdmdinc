import React from 'react'
import Header from '../../components/Header/Header'
// import Table from '../../components/Table/Table'
// import TableImage from '../../components/TableImage/TableImage'
import NewImage from '../../img/products.jpg'
import {Link} from 'react-router-dom'

const Products = () => {
  const title3 = 'When you submit your Purchase Order by clicking the button below, we will prepare and send you a customised Price List '
  return (
      <div>
      <Header title1="Our Catalogue" title2="Park's Pectus System" title3={title3} />
      <div className='flex justify-center mb-20'>
        <Link to='/contact'><button className='border border-gray-600 px-6 py-2 rounded-xl text-white bg-gray-600 hover:bg-[#3BB3BD] hover:border-[#3BB3BD]' >Send your Purchase order and or Enquiries here</button></Link>
      </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center',  gap:30}}>
              {/* <Table /> */}
        {/* <TableImage /> */}
        <img className='w-[60%]' src={NewImage} alt="" />
        <div className='flex justify-center mb-20'>
        <Link to='/contact'><button className='border border-gray-600 px-6 py-2 rounded-xl text-white bg-gray-600 hover:bg-[#3BB3BD] hover:border-[#3BB3BD]' >Send your Purchase order and or Enquiries here</button></Link>
      </div>
              
          </div>
    </div>
  )
}

export default Products