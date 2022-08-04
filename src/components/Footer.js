import React from "react";


const Footer = () => {
  return (

    <footer class="p-0 bg-fgrey rounded-lg shadow md:px-6 md:py-4 ">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center sm:mb-0 pl-2 ">
          <img
            src= "/logoxs-s.png"

            class=" h-6 pt-0 m-0 "

            alt="Lali-ho Logo"
          />
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 pt-2 pl-2 md:pt-0 md:pl-0 ">
          <li>
            <a href="/about" class=" mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/Lali-ho-Reviews" target="_blank" rel="noopener noreferrer" class="mr-4 hover:underline md:mr-6">
              Github
            </a>
          </li>
        </ul>
      </div>

      <span class="block text-xs text-gray-500 sm:text-center dark:text-gray-400 sm:mx-auto ">
        © 2022 Lali-ho™ . All Rights Reserved.{" "}
      <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
      
        <span class="block text-xs pt-1 pb-0 xs:text-center sm:mx-auto "></span>

        FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
        Ltd.
        <p>FINAL FANTASY XIV © SQUARE ENIX CO., LTD.</p>
      </span>
    </footer>
  );
};

export default Footer;
