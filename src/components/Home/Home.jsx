import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts  = useLoaderData();
    console.log(tshirts)
    return (
        <div>
            <h4>This is Home</h4>
        </div>
    );
};

export default Home;