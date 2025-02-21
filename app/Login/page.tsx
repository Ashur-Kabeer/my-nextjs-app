import React from 'react'

const Login = () => {
  return (
   
  <div className="flex font-poppins items-center justify-center">
    <div className="h-screen w-screen flex justify-center items-center light:bg-gray-900">
    <div className="grid gap-2">
    <div className="text-gray-400 font-bold text-2xl items-center ml-24">
        <h2>🛍️Stop n Shop</h2>
      </div>
      <div
        id="back-div"
        className="bg-gradient-to-r from-blue-500 to-green-500 rounded-[26px] m-2"
      >
        <div
          className="border-[20px] border-transparent rounded-[20px] light:bg-gray-900 bg-white shadow-lg xl:p-5 2xl:p-5 lg:p-5 md:p-5 sm:p-2 m-2"
        >
          <h2 className="pt-2 pb-2 font-bold light:text-gray-400 text-4xl text-center cursor-default">
          Log in
          </h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label className="mb-2 light:text-gray-400 text-lg">Email</label>
              <input
                id="email"
                className="border p-3 light:bg-indigo-700 light:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="mb-2 light:text-gray-400 text-lg">Password</label>
              <input
                id="password"
                className="border p-3 shadow-md light:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span
                className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Forget your password?
              </span>
            </a>
            <button
              className="bg-gradient-to-r light:text-gray-300 from-blue-500 to-green-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="light:text-gray-300">
              Don't have an account?
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="/Register"
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Sign Up
                </span>
              </a>
            </h3>
          </div>
          
          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-5 flex-wrap"
          >
          </div>

          <div
            className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
          >
            <p className="cursor-default">
              By signing in, you agree to our
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              and
              <a
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                href="#"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    

  )
}

export default Login
