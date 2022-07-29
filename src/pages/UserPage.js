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
      <div class="flex mt-12 bg-white rounded-md shadow">
        <div class="w-64 bg-red-100 rounded-l-md border-r border-dashed border-red-200">
          
          <div class="mt-8 border-t border-red-200">
            <button onClick={() => setIsSelected('profile')}  
              
              class="block py-3 px-6 text-red-700 font-semibold border-b border-red-200">
              Profile
            </button>
            {isSelected === 'profile' ? <ProfileForm /> : ''}
            <button onClick={() => setIsSelected('reviews')}  class="block py-3 px-6 text-red-700 font-semibold border-b border-red-200">
              Reviews
            </button>
            {isSelected === 'reviews' ? <ProfileReviewForm userData={userData} /> : ''}
          </div>
        </div>
        

      </div>
      
    </div>
  )
}

export default UserPage;
