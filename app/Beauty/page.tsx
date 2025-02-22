import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Beauty = () => {
  return (
<div className="bg-gray-400">
    <Header/>
    <Navbar/>
<div>
  <div className="container mx-auto px-10 py-4">
    <h2 className="text-xl font-bold text-gray mb-4">MAC Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://s1.thcdn.com/productimg/1600/1600/11471613-2574484788686702.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">MAC Foundation</h3>
                <p className="text-gray-500 text-sm mt-2">MAC Cosmetics Matchmaster Studio Fix Foundation SPF 15.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 94</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://s3.amazonaws.com/images.ecwid.com/images/18474664/1154626030.jpg" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">MAC Lipsticks</h3>
                <p className="text-gray-500 text-sm mt-2">MAC Cosmetics Longlasting Lipsticks, Availabe in three different Shades.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 120</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://img.makeupalley.com/1/1/8/1/3315841.JPG" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">MAC Blush</h3>
                <p className="text-gray-500 text-sm mt-2">MAC Cosmetics Extra Dimwnsion Blush - Into the Pink.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 132</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://www.sephora.com/productimages/sku/s2530905-main-zoom.jpg?imwidth=630" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">MAC Eyeshadow Pallette</h3>
                <p className="text-gray-500 text-sm mt-2">MAC Cosmetic Eyeshadow Pallete - Amber.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 150</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            </div>


        <div>
            <h2 className="text-xl font-bold text-gray mb-4">L'oreal Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://th.bing.com/th/id/R.f6e51bbbcad7732afab42836f0eba7ed?rik=iicWp97jbKcPYw&riu=http%3a%2f%2fimages.chickadvisor.com%2fitem%2f37748%2foriginal%2f2a04c93b5d6612889fa995ef4f90514f.jpg&ehk=lKcM2zIpFBNaBrEQ%2fUp1EvMgrhnvszbOT%2bP7lXGogw0%3d&risl=&pid=ImgRaw&r=0" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">L'oreal Mascara</h3>
                <p className="text-gray-500 text-sm mt-2">L'oreal Paris Voluminous Million Lashes Excess Mascara.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">AED 54</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://th.bing.com/th/id/OIP.MDhewxB1ZyPKjdJFxLOPLgHaHa?rs=1&pid=ImgDetMain" alt="Product"></img>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">L'oreal Liquid Highlighter</h3>
                <p className="text-gray-500 text-sm mt-2">L'oreal Paris Glow Mon Amour Highlighter & Illuminator.</p>
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

export default Beauty
