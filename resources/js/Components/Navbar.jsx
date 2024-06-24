import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                <Link href="/" className="mr-4">Home</Link>
                <Link href="/products" className="mr-4">Products</Link>
            </div>
        </nav>
    );
};

export default Navbar;
