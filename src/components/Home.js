import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

faker.seed(100);

const Home = () => {
    const productsArray = [...Array(20)].map((p) => ({
       id: faker.datatype.uuid(),
       name: faker.commerce.product(),
       price: faker.commerce.price(),
       image: faker.image.image(),
    }));

    const [cart, setCart] = useState([]);

    const [products, setProducts] = useState(productsArray);

  return (
    <div className='productContainer'>
        {products.map((prod => (
            <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart}/>
    )))}
    </div>
  )
}

export default Home