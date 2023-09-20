import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CartContainer from '../CartContainer/CartContainer';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts  = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart =(tshirt) =>{
        const exist = cart.find(ts => ts._id ===tshirt._id)
        if(exist){
            toast('Already Added this Product')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);   
        }  
      
    }

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }    
    return (
        <section className='md:flex gap-4 mt-10'>
           <div className='w-3/4 border rounded'>
                <div className='grid md:grid-cols-3 gap-8'>
                {
                    tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                    }
                </div>
           </div>

           <div className='w-1/4 ml-5'>
                <CartContainer
                 cart={cart}
                 handleRemoveFromCar={handleRemoveFromCart}
                ></CartContainer>
           </div>
        </section>
    );
};

export default Home;