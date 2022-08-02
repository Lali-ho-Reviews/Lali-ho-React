import React from "react";
import Search from "../components/Search";

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
        <Search />

      </div>
      <div class="w-full lg:w-1/2 lg:py-6 text-center">
        <img src="/landing.png" alt="FF14 classes" />
      </div>


      
      







    </div>
  );
}

export default Home;
