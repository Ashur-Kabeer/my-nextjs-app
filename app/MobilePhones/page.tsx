'use client'

import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const page = () => {
  return (
<div className="bg-gray-400">
    <Header/>
    <Navbar/>
<div>
  <div className="container mx-auto px-10 py-4">
    <h2 className="text-xl font-bold text-gray mb-4">Apple Phones</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://phoneshark.ae/cdn/shop/files/iphone14-pro-max-deeppurple.jpg?crop=center&height=847&v=1686722052&width=847" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">iPhone 14 pro max</h3>
                <p className="text-gray-500 text-sm mt-2">Apple 14 pro Max(256 GB)-Deep Purple.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 3,310</span>
                    <button onClick={() => window.location.href = '/iphone14'} className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://icentar.me/wp-content/uploads/2023/09/iphone15promax-black.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">iPhone 15 pro Max</h3>
                <p className="text-gray-500 text-sm mt-2">Apple 15 pro Max(128 GB)-Black Titanium.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 3,500</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://grintek.pe/wp-content/uploads/2024/10/iphone-16-pro-max-gold.webp" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">iPhone 16 pro max</h3>
                <p className="text-gray-500 text-sm mt-2">Apple 16 pro Max(512 GB)-Desert Titanium.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 6,999</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://www.cellularsales.com/wp-content/uploads/2024/09/iPhone_16_Plus_Pink-768x768.png" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">iPhone 16 plus</h3>
                <p className="text-gray-500 text-sm mt-2">Apple iPhone 16 plus(512 GB) - Pink.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 4,500</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            </div>


        <div>
            <h2 className="text-xl font-bold text-gray mb-4">Samsung Phones</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://media.croma.com/image/upload/v1705634974/Croma%20Assets/Communication/Mobiles/Images/303840_rlonbq.png" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Samsung S24 ultra</h3>
                <p className="text-gray-500 text-sm mt-2">Samsung Dual Sim Titanium Black 12GB RAM 256GB 5G-Middle East Version.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 3,500</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://priceintanzania.com/wp-content/uploads/2020/02/Samsung-Galaxy-Z-Flip.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Samsung Galaxy-Z Flip6</h3>
                <p className="text-gray-500 text-sm mt-2">Samsung AI Phone, 12GB RAM, 256GB Storage,Purple Shadow, Android Smartphone.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 4,100</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            


            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://m.media-amazon.com/images/I/71MFE2UY6-L.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Samsung Galaxy-Z Fold 3</h3>
                <p className="text-gray-500 text-sm mt-2">Samsung 256GB Storage,Phantom Black, Android Smartphone.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 3,800</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            


            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s24-ultra-5g-sm-s928-0.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Samsung S24 Ultra</h3>
                <p className="text-gray-500 text-sm mt-2">Samsung Dual Sim Titanium Gold 12GB RAM 512GB 5G-Middle East Version.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 4,200</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
        
            
            </div>
            
        </div>
    
</div>

    </div>
</div>
  )
}

export default page
