import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";

function FcPage() {
  const [data, setData] = useState({});
  let {id} = useParams();

  
  // Created function to access the LalihoApi and get the details of specific freecompany which then sets the state enforced async function 
  async function fetchData() {
    const url = 'http://localhost:3000/companies/' + id;
    const response = await fetch(url)
    response
      .json()
        .then(response => {
          setData(response);
        })
        .catch(error => console.error(error))
  }
  // useEffect implemented to call fetchData on page load, empty array applied to the end to avoid DDOS Attack on the backend and avoid loop
  useEffect(() => {
    fetchData();
  }, []);

  return (

  <div class="flex flex-col pb-3 pt-1">
            <div
              class="relative flex flex-col md:flex-row md:space-x-5 space-y-3  rounded-xl shadow-lg p-3 max-w-s md:max-w-lg mx-auto border border-fgrey bg-fgrey">

            <div class="w-full md:w-1/6 bg-fgrey grid place-items-center">
              <img src="/startscreen.jpeg" alt="ff14 loading screen backgorund" class="rounded-xl" />
            </div>
              <div class="w-full md:w-2/3 bg-fgrey flex flex-col space-y-2 p-3">
                <div class="flex justify-between item-center">
                  <p class="text-gray-400 text-xs hidden md:block">Rank: {data.rank}</p>
                  <div class="flex items-center">
                    <p class="text-blue-400 font-bold text-xs ml-1">
                      5 reviews 
                    </p>
                  </div>
                  
                  <div class=" px-3 py-1 rounded-full text-xs font-s text-gray-400 hidden md:block">
                    Active members: {data.members} </div>
                </div>
                <h3 class="font-black text-gray-300 md:text-l text-l ">{data.name}</h3>
                <p class="md:text-m text-gray-500 text-base">{data.slogan}</p>
                <p class="text-s font-black text-blue-400">
                </p>
              </div>
            </div>
          </div>

  )
}


export default FcPage;
