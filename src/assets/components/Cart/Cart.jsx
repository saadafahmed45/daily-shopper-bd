import React from 'react';

const Cart = (props) => {
   const cart = props.cart;
   console.log(cart);

   // let total = 0;
   // for (const product of cart) {
   //    total = total + product.price;

   // }

   return (
      <div>
         {/* <h2>you cart{cart.length}</h2> */}
         {/* <h3>name:{cart.price} </h3> */}
         {/* <h3>price:</h3> */}
      </div>
   );
};

export default Cart;