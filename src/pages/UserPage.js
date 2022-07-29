import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileForm from "./profileForm";
import ProfileReviewForm from "./profileReviewForm";


function UserPage() {
  const [isSelected, setIsSelected] = useState('profile')
 

  return <div class="w-full max-w-6xl min-w-0 mx-auto px-6 ">
  <div class="flex mt-12 bg-white rounded-md shadow">
    <div class="w-64 bg-red-100 rounded-l-md border-r border-dashed border-red-200">
      
      <div class="mt-8 border-t border-red-200">
        <button onClick={() => setIsSelected('profile')}  
          
          class="block py-3 px-6 text-red-700 font-semibold border-b border-red-200">
          Profile
        </button>
        {isSelected == 'profile' ? <ProfileForm /> : ''}
        <button onClick={() => setIsSelected('reviews')}  class="block py-3 px-6 text-red-700 font-semibold border-b border-red-200">
          Reviews
        </button>
        {isSelected == 'reviews' ? <ProfileReviewForm /> : ''}
      </div>
    </div>
    
  </div>
  
</div>
}

export default UserPage;
