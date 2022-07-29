import React from "react";

function ProfileForm() {
  return ( 
    <div class="flex-grow">
    <div class="flex flex-col mx-40 mt-20">
      <div class="flex items-center mb-4">
        <label for="email" class="w-24 font-semibold text-gray-700">
          Email
        </label>
        <input
          type="email"
          class="flex-grow border border-red-200 rounded py-1 px-3"
          placeholder="Email"
        />
      </div>
      <div class="flex items-center mb-4">
        <label for="username" class="w-24 font-semibold text-gray-700">
          Username
        </label>
        <input
          type="text"
          class="flex-grow border border-red-200 rounded py-1 px-3"
          placeholder="Username"
        />
      </div>
      <div class="flex items-center mb-4">
        <label for="password" class="w-24 font-semibold text-gray-700">
          Password
        </label>
        <input
          type="password"
          class="flex-grow border border-red-200 rounded py-1 px-3"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center mb-4">
        <label for="Confirm Password" class="w-24 font-semibold text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          class="flex-grow border border-red-200 rounded py-1 px-3"
          placeholder="Confirm Password"
        />
      </div>

      <div class="flex items-center mb-4 pt-4">
        <button class="py-1 px-4 bg-red-800 text-red-100 font-semibold hover:bg-red-900 hover:shadow border border-red-200 rounded mr-2">
          Submit
        </button>
        <button class="py-1 px-4 bg-white text-red-700 font-semibold hover:shadow border border-red-200 rounded">
          Delete account
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProfileForm;
