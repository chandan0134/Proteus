import React, { useState } from "react";
import profile from "../assets/home icon.png";
import profile2 from "../assets/user icon.png";

const Profile = () => {
  return (
    <div class="flex h-screen bg-gray-200">
      <div class="fixed flex flex-col top-0 left-0 h-full w-16 bg-gray-900 border-r border-gray-800">
        <div class="flex items-center justify-center mt-5">
          <a
            href="/signup"
            class="text-white text-2xl font-semibold uppercase hover:text-gray-400"
          >
            <img className="w-full h-full object-contain" src={profile} />
          </a>
        </div>
        <div class="flex items-center justify-center mt-5">
          <a
            href="/profile"
            class="text-white text-2xl font-semibold uppercase hover:text-gray-400"
          >
            <img className="w-full h-full object-contain" src={profile2} />
          </a>
        </div>
      </div>   
      <div class="flex-grow p-6">
        <h1 class="text-2xl font-semibold">Page content</h1>
      </div>
    </div>
  );
};

export default Profile;
