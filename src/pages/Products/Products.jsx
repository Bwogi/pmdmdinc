import React from 'react'
import Header from '../../components/Header/Header'
import Table from '../../components/Table/Table'
import TableImage from '../../components/TableImage/TableImage'

const Products = () => {
  const title3 = ''
  return (
      <div>
          <Header title1="Our Catalogue/" title2="Park's Pectus System" title3={title3}  />
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center',  gap:30}}>
              <Table />
              <TableImage />
              
          </div>
    </div>
  )
}

export default Products