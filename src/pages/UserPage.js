import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileForm from "./profileForm";
import ProfileReviewForm from "./profileReviewForm";


function UserPage() {
  const [isSelected, setIsSelected] = useState('profile')
 

  return <div class="w-full max-w-6xl min-w-0 mx-auto px-6 h-max ">
  <div class="flex mt-12 bg-fgrey rounded-md shadow">
    <div class="w-64 bg-fgrey rounded-l-md ">
      
      <div class="mt-8 ">
        <button onClick={() => setIsSelected('profile')}  
          
          class="block py-3 px-6 text-grey-200 font-semibold border-b border-blue-500">
          Profile
        </button>
        {isSelected == 'profile' ? <ProfileForm /> : ''}
        <button onClick={() => setIsSelected('reviews')}  class="block py-3 px-6 text-grey-200 font-semibold">
          Reviews
        </button>
        {isSelected == 'reviews' ? <ProfileReviewForm /> : ''}
      </div>
    </div>
    
  </div>
  
</div>
}

export default UserPage;
