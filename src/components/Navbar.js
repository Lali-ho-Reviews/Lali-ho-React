import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPage from "../pages/UserPage";
import lalihoApi from "../api/lalihoApi";
const Navbar = ({loggedInUser, activateUser}) => {

  const logged = sessionStorage.getItem("username")

  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault()
    activateUser("")
    sessionStorage.clear()
    navigate("/") // Optimally, this would navigate back to the previous page
  }

  const [showNav, setNav] = useState(false);

  return (
    <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex md:flex md:flex-wrap justify-between items-center mx-auto ">
        <a href="/" class="flex items-center">
          <img src="/logo3.png" class=" mr-3 h-6 sm:h-9" alt="Lali-ho Logo" />
        </a>
        <button onClick={()=>setNav(!showNav)}
          data-collapse-toggle="mobile-menu"
         
          type="button"
          class=" absolute right-8 top-1 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded="false" 
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class={showNav ? "" : "hidden" + " w-full md:block md:w-auto "} id="mobile-menu">
          <ul class="flex flex-col md:mt-4 md:flex-row md:space-x-8 md:text-sm md:font-medium pt-10 md:pt-0">
            <li>
              <a
                href="/fc"
                class="block  py-2 pr-4 pl-3 text-white hover:bg-blue-700  rounded md:hover:md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Free Companies
              </a>
            </li>
            { !logged &&
              <li>
                <a
                  href="/signin"
                  class="block py-2 pr-4 pl-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign In
                </a>
              </li>
            }
            { !logged &&
              <li>
                <a
                  href="/signup"
                  class="block py-2 pr-4 pl-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign Up
                </a>
              </li>
            }
            { logged &&
              <li>
                <a
                  href="/account"
                  class="block py-2 pr-4 pl-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {logged}
                </a>
              </li>
            }
            { logged &&
              <li>
                <a
                  href="/"
                  onClick={logout}
                  class="block py-2 pr-4 pl-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sign Out
                </a>
              </li>
            }
          </ul>
          </div>
        </div>
    </nav>
    
  );
};

export default Navbar;
