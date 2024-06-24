import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 text-white">
                <div className="container mx-auto">
                    <Link href="/" className="mr-4">Home</Link>
                    <Link href="/products" className="mr-4">Products</Link>
                </div>
            </nav>
            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-64 bg-gray-700 text-white p-4">
                    <ul>
                        <li className="mb-2">
                            <Link href="/products" className="block px-4 py-2 hover:bg-gray-600 rounded">
                                Products
                            </Link>
                        </li>
                    </ul>
                </aside>
                {/* Main Content */}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
