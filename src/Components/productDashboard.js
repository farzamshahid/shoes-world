import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'SNEAKERS', price: 545.00, rating: 5, image: '/img/image 2.png' },
    { id: 2, name: 'SNEAKERS', price: 366.00, rating: 5, image: '/img/image 3.png' },
    { id: 3, name: 'SNEAKERS', price: 366.00, rating: 5, image: '/img/image 4.png' },
    { id: 4, name: 'SNEAKERS', price: 666.00, rating: 5, image: '/img/image 5.png' },
    { id: 5, name: 'SNEAKERS', price: 945.00, rating: 5, image: '/img/rohit-tandon-9wg5jCEPBsw-unsplash 2.png' },
];

const ProductDashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-gray-100 h-screen">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex-1 p-4 lg:p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-xl lg:text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center border rounded-xl bg-white px-2 py-2">
                        <ShoppingCart size={24} />
                        <span className="ml-2">My cart</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-3 bg-black text-white rounded-lg overflow-hidden relative">
                        <img
                            src="/img/Group 32 (1).png"
                            alt="Featured Product"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="bg-gray-200 p-6 rounded-lg flex flex-col justify-between">
                        <img src="/img/Frame 5.png" alt="Running" className="w-full mt-4 object-contain" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDashboard;
