import React from 'react'

const Header = () => {
  return (
    <header className="bg-green-400 p-3">
    <div className="max-w-full ml-100 flex justify-between items-center">
      <div className="text-white font-bold text-2xl">
        <h2>🛍️Stop n Shop</h2>
      </div>

      <div className="flex items-center space-x-10">
        <input
          type="text"
          placeholder="🔍Search for Products,Brands or More"
          className="w-80 p-2 rounded-md text-black text-md"
        />
        </div>
        <div><h3>☎Toll-Free:800-345-214</h3></div>
        <div>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
        👨🏻‍💻Login
        </button>
        </div>
        <div>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
        🛒Cart</button>

        </div>
      
    </div>
  </header>
  )
}

export default Header
