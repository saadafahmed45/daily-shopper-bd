import React from 'react';
import './ProductCard.css'
const ProductCard = (props) => {
   // console.log(props);
   const product = props.product;

   const addToCart = props.addToCart;


   return (
      <div>
         <div className="product_box" key={product.id}>
            <div className='pr_img'>
               <img src={product.img} alt={product.name} />
            </div>
            <div className="pr_text">
               <p>{product.category}</p>
               <h3> {product.name}</h3>
               <h4>Price:  $ {product.price}</h4>
            </div>

            <button
               onClick={() => addToCart(props.product)}
               className="cart_btn">Add Cart</button>

         </div>
      </div>
   );
};

export default ProductCard;