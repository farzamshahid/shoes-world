import React from 'react';
import Sidebar from './Sidebar';
const myCart = () => (

    <div className="flex h-screen">
        <div className=" bg-white border rounded-lg pt-3">
            <Sidebar />
        </div>
        <div className="flex-1 flex p-6 bg-gray-100">
            <div className="w-3/5 pr-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className='flex items-center'>
                        <img src='img/arrow.png' />
                        <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
                    </div>
                    <hr className='w-[290px]  mb-2' />
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                            <div className="flex items-center">
                                <img
                                    src="img/image 2.png"
                                    alt="Sneakers"
                                    className="w-16 h-16 mr-5"
                                />
                                <div>
                                    <p className="font-medium">SNEAKERS</p>
                                    <p className="text-gray-500">Running</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className=' font-medium'>1</p>
                                <img src='img/Group 4.png' className='w-4 mr-5' />
                                <div className="flex items-center">
                                    <p className="font-medium mr-8">$65.00</p>
                                    <button className="ml-4 text-red-500" >
                                        <img src='img/Trash Can.png' className='w-5' />
                                    </button>
                                </div>

                            </div>

                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm">

                            <div className="flex items-center">
                                <img
                                    src="img/image 5.png"
                                    alt="Sneakers"
                                    className="w-16 h-16 mr-5"
                                />
                                <div>
                                    <p className="font-medium">SNEAKERS</p>
                                    <p className="text-gray-500">Running</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className=' font-medium'>1</p>
                                <img src='img/Group 4.png' className='w-4 mr-5' />
                                <div className="flex items-center">
                                    <p className="font-medium mr-8">$65.00</p>
                                    <button className="ml-4 text-red-500" >
                                        <img src='img/Trash Can.png' className='w-5' />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm">

                            <div className="flex items-center">
                                <img
                                    src="img/image 3.png"
                                    alt="Sneakers"
                                    className="w-16 h-16 mr-5"
                                />
                                <div>
                                    <p className="font-medium">SNEAKERS</p>
                                    <p className="text-gray-500">Running</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className=' font-medium'>1</p>
                                <img src='img/Group 4.png' className='w-4 mr-5' />
                                <div className="flex items-center">
                                    <p className="font-medium mr-8">$65.00</p>
                                    <button className="ml-4" >
                                        <img src='img/Trash Can.png' className='w-5' />
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm">

                            <div className="flex items-center">
                                <img
                                    src="img/image 4.png"
                                    alt="Sneakers"
                                    className="w-16 h-16 mr-5"
                                />
                                <div>
                                    <p className="font-medium">SNEAKERS</p>
                                    <p className="text-gray-500">Running</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className=' font-medium'>1</p>
                                <img src='img/Group 4.png' className='w-4 mr-5' />
                                <div className="flex items-center">
                                    <p className="font-medium mr-8">$65.00</p>
                                    <button className="ml-4" >
                                        <img src='img/Trash Can.png' className='w-5' />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-2/5 bg-[#89089F] text-white p-6 rounded-lg">
                <div className='flex justify-between '>
                    <h2 className="text-lg font-semibold mb-6">Card Details</h2>
                    <img src='mark.png' alt='mark' className='w-fit' />
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm mb-2" htmlFor="cardType">Card Type</label>
                        <div className="flex space-x-4">
                            <img src="img/Rectangle 9.png" alt="MasterCard" className="w-10 h-10" />
                            <img src="img/Rectangle 10.png" alt="Visa" className="w-10 h-10" />
                            <img src="/img/Rectangle 11.png" alt="RuPay" className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-2" htmlFor="nameOnCard">Name on Card</label>
                        <input
                            type="text"
                            id="nameOnCard"
                            className="w-full p-2 bg-[#BA68C8] rounded"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-2" htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="w-full p-2 bg-[#BA68C8] rounded"
                            placeholder="1111 2222 3333 4444"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm mb-2" htmlFor="expiryDate">Expiration Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                className="w-full p-2 bg-[#BA68C8] rounded"
                                placeholder="mm/yy"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm mb-2" htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                className="w-full p-2 bg-[#BA68C8] rounded"
                                placeholder="123"
                            />
                        </div>
                    </div>
                    <div className='flex mt-1  justify-between'>
                        <p>
                            Subtotal
                        </p>
                        <p>
                            $1,668
                        </p>
                    </div>
                    <div className='flex mt-1 justify-between'>
                        <p>
                            Shipping
                        </p>
                        <p>
                            $4
                        </p>
                    </div>
                    <div className='flex mt-1 justify-between'>
                        <p>
                            Total(Tax incl.)
                        </p>
                        <p>
                            $1,672
                        </p>
                    </div>

                    <div className="mt-6">
                        <button className="w-full py-2 bg-[#BA68C8] hover:bg-purple-600 rounded">
                            <span className='mr-[210px]'>
                                $162.00
                            </span>
                            Checkout
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default myCart;