import React, { useState } from 'react';
import data from "../../../fakeData/products.json"
import './Product.css'
const Products = () => {


   const [products, setProducts] = useState(data)

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
            <h2>data {products.length}</h2>

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
         {/* search  */}


         <div className="pr_main">
            {
               filteredItems.map((product, index) => (
                  <div className="product_box" key={product.id}>
                     <div className='pr_img'>
                        <img src={product.img} alt={product.name} />
                     </div>
                     <div className="pr_text">
                        <h4> $ {product.price}</h4>
                        <p>{product.category}</p>
                        <h3> {product.name}</h3>
                     </div>
                     <button className="cart_btn">Add Cart</button>
                  </div>
               ))
            }
         </div>
      </div>
   );
};

export default Products;