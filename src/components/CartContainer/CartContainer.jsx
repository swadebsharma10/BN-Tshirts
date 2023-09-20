import React from "react";

const CartContainer = ({ cart, handleRemoveFromCar }) => {

    let message;
    if(cart.length === 0){
        message =  <p className="text-xl font-bold text-blue-600">Please Add some Product</p>
    }
    else{
        message = <p className="text-orange-400 font-bold">Thank You!!</p>
    }

  return (
    <div className="border rounded p-4">
      <h3 className="text-3xl font-bold text-center underline mb-5">
        Order Summary
      </h3>
      <div>
        <h3 className="text-xl font-bold text-purple-700">
          Added product: {cart.length}
        </h3>
        {message}
          {
            cart.map((shirt, idx) => <p className="mb-3 text-blue-500-500" key={shirt._id}> {idx+1}. {shirt.name} <button
             onClick={()=>handleRemoveFromCar(shirt._id)} className="border text-red-500"> Remove-X</button> </p> )
          }
      </div>
    </div>
  );
};

export default CartContainer;
