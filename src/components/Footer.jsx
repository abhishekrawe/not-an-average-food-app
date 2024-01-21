import React from "react";

function Footer() {
  return (
    <> 


      <div className="w-full p-4 bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-200 dark:border-gray-100">
        {/* <div className="flex justify-center gap-40">
          <div>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-700 text-left">For better experience, download</h5>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-700 text-left">the Swiggy app now.</h5>
          </div>
          <div>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-full sm:w-auto bg-black-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-black dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                </div>
              </a>
              <a href="#" className="w-full sm:w-auto bg-black-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-black dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xs">Get in on</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <footer className="bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-around">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png" className="h-16 me-3" alt="FlowBite Logo" />
              </a>
              <h1 className="text-white text-left mt-4">© 2023 Bundl Technologies <br/> Pvt. Ltd</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                
                <ul className="text-gray-500 dark:text-gray-400 font-medium text-left">
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">About</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Careers</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Team</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Swiggy one</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Swiggy Instamart</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://tailwindcss.com/" className="hover:underline">Swiggy Genie</a>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Helo & Support</a>
                  </li>
                  <li className="mb-4">
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Partner with Us</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Ride with Us</a>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <div className="hover:underline">Bengalore</div>
                  </li>
                   <li className="mb-4">
                    <div className="hover:underline">Gurgaon</div>
                  </li>
                   <li className="mb-4">
                    <div className="hover:underline">Delhi</div>
                  </li>
                  <li className="mb-4">
                    <div className="hover:underline">Gurgaon</div>
                  </li>
                  <li className="mb-4">
                    <div className="hover:underline">Patna</div>
                  </li>
                  <li>
                    <div className="hover:underline">Terms &amp; Conditions</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer;
