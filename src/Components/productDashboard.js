import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import {
    ShoppingCart,
    Home,
    Package,
    Bell,
    PieChart,
    Clipboard,
    LogOut,
} from "lucide-react";
import { logout } from "../features/auth/authSlice";

const ProductDashboard = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const products = useSelector((state) => state.products.items);
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();
    const cartItemCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };



    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-white p-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center mb-8">
                        <img
                            src="/mark.png"
                            alt="User"
                            className="w-12 h-12 rounded-sm mr-4"
                        />
                        <div>
                            <h2 className="font-bold">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <nav className="space-y-8">
                        <Link
                            to="/dashboard"
                            className="flex items-center p-2 bg-purple-600 text-white rounded mb-2"
                        >
                            <Home size={20} className="mr-2" /> Dashboard
                        </Link>
                        <Link
                            to="/products"
                            className="flex items-center p-2 text-gray-700 rounded mb-2"
                        >
                            <Package size={20} className="mr-2" /> Products
                        </Link>
                        <Link
                            to="/notifications"
                            className="flex items-center p-2 text-gray-700 rounded mb-2"
                        >
                            <Bell size={20} className="mr-2" /> Notifications
                        </Link>
                        <Link
                            to="/analytics"
                            className="flex items-center p-2 text-gray-700 rounded mb-2"
                        >
                            <PieChart size={20} className="mr-2" /> Analytics
                        </Link>
                        <Link
                            to="/inventory"
                            className="flex items-center p-2 text-gray-700 rounded mb-2"
                        >
                            <Clipboard size={20} className="mr-2" /> Inventory
                        </Link>
                    </nav>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center p-2 mt-[330px] text-gray-700 rounded"
                >
                    <LogOut size={20} className="mr-2" /> Logout
                </button>
            </aside>

            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <Link
                        to="/myCart"
                        className="flex items-center text-black  bg-white rounded-full p-4"
                    >
                        <div className="relative">
                            <ShoppingCart size={24} className="mr-2" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                        My Cart
                    </Link>
                </header>
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
                <div className="grid grid-cols-5 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-500 mb-2">{product.category}</p>
                            <p className="font-bold mb-4">${product.price.toFixed(2)}</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-purple-600 text-white p-2 rounded text-sm"
                                >
                                    ADD TO CART
                                </button>
                                <button className="bg-gray-200 text-gray-700 p-2 rounded text-sm">
                                    QUICK VIEW
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductDashboard;
