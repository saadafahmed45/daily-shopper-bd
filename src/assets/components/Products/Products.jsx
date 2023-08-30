import React, { useEffect, useState } from 'react';
// import data from "../../../../public/products.json"
import './Product.css'
import ProductCard from '../ProductCard/ProductCard';
import MyCart from '../Cart/MyCart';
const Products = ({ addCart }) => {


   const [products, setProducts] = useState([])

   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])


   const [cart, setCart] = useState([])

   const addToCart = (product) => {
      const newCart = [...cart, product]
      setCart(newCart);
   }



   // const [search, setSearch] = useState('');

   const [selectedCategory, setSelectedCategory] = useState('All');

   const filteredItems = selectedCategory === 'All'
      ? products
      : products.filter(item => item.category === selectedCategory);

   const categories = ['All', 'Earphones', 'Cap', 'Bag', 'Bottle'];

   // const filterItem = (item) => {
   //    const updateProduct = products.filter((curElem) => {
   //       return curElem.category === item;
   //    })
   //    setProducts(updateProduct)
   // }
   return (
      <div>
         {/* search  */}
         {/* <div>
            <input type="text"
               onChange={(e) => setSearch(e.target.value)}
               placeholder='searching'
            />
         </div> */}
         {/* search  */}

         {/* categories btn */}
         <div className='ct_btn'>
            {/* <h2>data {products.length}</h2> */}
            <h2>cart  {cart.length}</h2>

            {categories.map((category, index) => (
               <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'active' : ''}
               >
                  {category}
               </button>
            ))}
         </div>
         <div>
            <MyCart cart={cart}></MyCart>
         </div>
         {/* search  */}


         <div className="pr_main">
            {
               filteredItems.map(product =>
                  <ProductCard

                     product={product}
                     addToCart={addToCart}
                     key={product.id}>

                  </ProductCard>)
            }
         </div>
      </div>
   );
};

export default Products;