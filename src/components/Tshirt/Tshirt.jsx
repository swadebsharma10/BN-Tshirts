import React from 'react';

const Tshirt = ({tshirt, handleAddToCart}) => {
    
    const {gender, name, price, picture} = tshirt;
    return (
        <div className='border rounded'>
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className='w-full h-64' src={picture} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions">
            <button onClick={()=>handleAddToCart(tshirt)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Tshirt;