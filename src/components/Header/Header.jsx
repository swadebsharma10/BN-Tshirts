import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="bg-sky-600 flex justify-around items-center py-4 rounded-md">
      <h3 className="text-3xl font-bold text-white">BN-T.Shirt</h3>
      <nav className="text-white space-x-4 ">
        <Link className="hover:text-orange-500" to="/"> Home</Link>
        <Link className="hover:text-orange-500" to="/orders"> Orders</Link>
        <Link className="hover:text-orange-500" to="/reviews"> Reviews</Link>
        <Link className="hover:text-orange-500" to="/contact"> Contact</Link>
      </nav>
    </section>
  );
};

export default Header;
