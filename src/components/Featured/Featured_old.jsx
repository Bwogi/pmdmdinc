import React from 'react'
// import Card from '../Card/Card';
import './featured.scss';
import { Card } from 'antd';
const { Meta } = Card;

export default function Featured({ type }) {
    const data = [
        {
            id: 1,
            img: "https://www.ode-labs.net/pmdmdImages/PectusSystem01.jpg",
            img2: "https://www.ode-labs.net/pmdmdImages/PectusSystem02.jpg",
            title: "Park's Pectus System",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://www.ode-labs.net/pmdmdImages/PectusSystem03.jpg",
            title: "Park's Pectus System",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://www.ode-labs.net/pmdmdImages/PectusSystem02.jpg",
            title: "Park's Pectus System",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://www.ode-labs.net/pmdmdImages/PectusSystem04.jpg",
            title: "Park's Pectus System",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className='featured'>
          <div className="top">
              <h1>{type} Products</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis atque ipsum nihil unde animi voluptatibus accusantium quaerat sapiente ipsa soluta! Odit quisquam praesentium dignissimos, ut laboriosam laudantium consequatur vel quibusdam?</span>
          </div>
          <div className="bottom">
              {data.map(item => (
                 <Card
                 hoverable
                 style={{
                   width: 240,
                 }}
                 cover={<img alt="example" src={item.img} />}
               >
                 <Meta title={item.title} description="www.instagram.com" />
               </Card>
              ))}
          </div>
    </div>
  )
}
