import React from "react";

function Home() {
  return (
    <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <p class="uppercase tracking-loose">Lali-ho Reviews</p>
        <h1 class="my-4">
          Find a FC that matches your play style!
        </h1>
        <p class="leading-normal mb-4">
        Lali-ho is a review site, that aims to connect players with a Free Company that matches their interests and values by providing them the tools to filter by in-game focus or ratings, as well as read reviews from previous or current members.

        </p>
        
        <form className="container mx-auto">   
            <label for="default-search" class="mb-2 text-s font-s text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

      </div>
      <div class="w-full lg:w-1/2 lg:py-6 text-center">
        <img src="/landing.png" alt="FF14 class image " />
      </div>


      
      







    </div>
  );
}

export default Home;
