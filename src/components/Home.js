import React, { useContext, useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import { Cart } from '../Context';

faker.seed(100);

const Home = ({}) => {

    const productsArray = [...Array(20)].map((p) => ({
       id: faker.datatype.uuid(),
       name: faker.commerce.product(),
       price: faker.commerce.price(),
       image: faker.image.image(),
    }));

    const [products, setProducts] = useState(productsArray);

  return (
    <div className='productContainer'>
        {products.map((prod => (
          <SingleProduct 
            prod={prod} 
            key={prod.id} 
      />
    )))}
    </div>
  )
}

export default Home