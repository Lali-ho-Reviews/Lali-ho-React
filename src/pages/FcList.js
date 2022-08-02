import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import lalihoApi from "../api/lalihoApi";


// 
function FcList() {
  const logged = sessionStorage.getItem("username") || ''
  const [data, setData] = useState({
    companies: [],
    xiv_companies: []
  });
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  let urlSuffixLaliho = ""
  if (query) {
    urlSuffixLaliho = `search/${query}`
  }


  // Fetch data from both LalihoApi and XIVAPI
  async function fetchData() {
    // Get request laliho with support for queries
    const lalihoResponse = await lalihoApi
      .get("/companies/" + urlSuffixLaliho)
      .then(response => response.data)
      .catch((error) => console.error(error));
    // const xivResponse = await xivApi
    //   .get 
    //   .catch((error) => console.error(error));
    setData({
      companies: lalihoResponse,
      xiv_companies: {},
      company_list: {}
    });
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.companies.map(fc => (
         
         <div class="flex flex-col pb-3 pt-1" key={fc.id}>
           <div
             class="relative flex flex-col md:flex-row md:space-x-5 space-y-3  rounded-xl shadow-lg p-3 max-w-s md:max-w-lg mx-auto border border-fgrey bg-fgrey">

           <div class="w-full md:w-1/6 bg-fgrey grid place-items-center">
             <img src="/startscreen.jpeg" alt="ff14 loading screen backgorund" class="rounded-xl" />
           </div>
             <div class="w-full md:w-2/3 bg-fgrey flex flex-col space-y-2 p-3">
               <div class="flex justify-between item-center">
                 <p class="text-gray-400 text-xs hidden md:block">Rank: {fc.rank}</p>
                 <div class="flex items-center">
                   <p class="text-blue-400 font-bold text-xs ml-1">
                     5 reviews 
                   </p>
                 </div>
                 
                 <div class=" px-3 py-1 rounded-full text-xs font-s text-gray-400 hidden md:block">
                   Active members: {fc.members} </div>
               </div>
               <h3 class="font-black text-gray-300 md:text-l text-l ">{fc.name}</h3>
               <p class="md:text-m text-gray-500 text-base">{fc.slogan}</p>
               <p class="text-s font-black text-blue-400">
               <a href={"/Fc/" + fc.id}>See Reviews</a> 
               </p>
             </div>
           </div>
         </div>
         ))}
   </div>
  );
}

export default FcList;
