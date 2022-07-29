import React from "react";

function ProfileForm() {
  return (
    <div class="w-full  mx-auto px-6 flex  lg:pl-72   ">
      <div class="flex-grow">
        <div class="flex flex-col mx-40 ">
          <div class="flex items-center mb-4">
            <label for="email" class="w-24 font-semibold text-gray-200">
              Email
            </label>
            <input
              type="email"
              class="flex-grow border border-red-200 rounded py-1 px-3"
              placeholder="Email"
            />
          </div>
          <div class="flex items-center mb-4">
            <label for="username" class="w-24 font-semibold text-gray-200">
              Username
            </label>
            <input
              type="text"
              class="flex-grow border border-red-200 rounded py-1 px-3"
              placeholder="Username"
            />
          </div>
          <div class="flex items-center mb-4">
            <label for="password" class="w-24 font-semibold text-gray-200">
              Password
            </label>
            <input
              type="password"
              class="flex-grow border border-red-200 rounded py-1 px-3"
              placeholder="Password"
            />
          </div>
          <div class="flex items-center mb-4">
            <label
              for="Confirm Password"
              class="w-24 font-semibold text-gray-200"
            >
              Confirm Password
            </label>
            <input
              type="password"
              class="flex-grow border border-red-200 rounded py-1 px-3"
              placeholder="Confirm Password"
            />
          </div>

          <div class="flex items-center mb-4 pt-4">
            <button class="py-1 px-4 bg-blue-500 text-red-100 font-semibold hover:bg-blue-800 hover:shadow border border-blue-500 rounded mr-2">
              Submit
            </button>
            <button class="py-1 px-4 bg-red-500 text-white font-semibold hover:shadow border border-red-500 rounded hover:bg-red-800">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default ProfileForm;
