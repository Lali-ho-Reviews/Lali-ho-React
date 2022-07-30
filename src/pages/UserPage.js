import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileForm from "./profileForm";
import ProfileReviewForm from "./profileReviewForm";
import lalihoApi from "../api/lalihoApi";


function UserPage() {
  const [isSelected, setIsSelected] = useState('profile')
  const [userData, setUserData] = useState("")



  let { username } = useParams();

  async function fetchData() {
    const response = await lalihoApi
      .get("/users/" + username)
      .catch((error) => console.error(error));
    setUserData(response.data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="w-full max-w-6xl min-w-0 mx-auto px-6 ">
      <div class="flex mt-12 bg-fgrey rounded-md shadow">
        <div class="w-64 bg-fgrey rounded-l-md ">
          
          
            <button onClick={() => setIsSelected('profile')}  
              
              class="block py-3 px-6 text-grey-200 font-semibold border-b border-blue-500">
              Profile
            </button>
            {isSelected === 'profile' ? <ProfileForm /> : ''}
            <button onClick={() => setIsSelected('reviews')}  class="static py-3 px-6 text-grey-200 font-semibold ">
              Reviews
            </button>
            {isSelected === 'reviews' ? <ProfileReviewForm userData={userData} /> : ''}
         
        </div>
        

      </div>
      
    </div>
  )
}

export default UserPage;
