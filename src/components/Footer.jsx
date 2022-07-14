import React from "react";


const Footer = () => {
  return (
    <footer class="p-0 bg-fgrey rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a class="flex items-center sm:mb-0">
          <img
            src= "/logo3.png"
            class=" h-10 pt-0 m-0"
            alt="Lali-ho Logo"
          />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class=" hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Github
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
      <span class="block text-xs text-gray-500 sm:text-center dark:text-gray-400 ">
        © 2022 Lali-ho™ . All Rights Reserved.{" "}
        <span class="block text-xs pt-3 pb-0 xs:text-center "></span>
        FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
        Ltd.
        <p>FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</p>
      </span>
    </footer>
  );
};

export default Footer;
