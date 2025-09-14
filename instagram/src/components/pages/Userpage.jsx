import React, { useEffect } from "react";
import first from "../../assets/icons/first.png";
import gray from "../../assets/icons/gray.png";
import libr from "../../assets/icons/libr.png";
import red from "../../assets/icons/red.png";
import ProfileIcon from "../../assets/icons/Profile.png";
import UserIcon from "../../assets/icons/user.png";
import { client } from "../lib";
import star from "../../assets/icons/star.png";
import car from "../../assets/icons/car.png";
import phone from '../../assets/icons/phone.png'
import lock from "../../assets/icons/lock.png"



const profileData = {
  username: "mkbhd",
  postsCount: "1,861",
  followers: "4M",
  following: "454",
  name: "Marques Brownlee",
  bio: "I promise I won't overdo the filters.",
  website: "mkbhd.com",
  profilePicUrl: UserIcon,
};

const PostGrid = ({ posts }) => {
  return (
    <div className="profile-posts-grid grid grid-cols-3 gap-px">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-item aspect-square w-[300px] h-[300px] relative"
        >
          <img src={post.imageUrl} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default function Userpage() {


  const posts = [
    { id: 1, imageUrl: car },
    { id: 2, imageUrl: phone },
    { id: 3, imageUrl: lock },

    { id: 4, imageUrl: first },
    { id: 5, imageUrl: red },
    { id: 6, imageUrl: libr },
    { id: 7, imageUrl: gray },
    { id: 8, imageUrl: gray },
    { id: 9, imageUrl: gray },
    { id: 10, imageUrl: gray },
    { id: 11, imageUrl: gray },
    { id: 12, imageUrl: gray },
    { id: 13, imageUrl: gray },
  ];
  async function getFollowers() {
    try {
      const res = await client.get("/api/user/followings/johndoe");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFollowers();
  }, []);
  return (
    <div className="profile-container mx-auto px-4 sm:px-10 max-w-5xl">
      <div className="profile-header flex items-start mb-8 space-x-10">
        <div className="profile-pic-container flex-shrink-0">
          <img
            src={profileData.profilePicUrl}
            className="profile-pic w-28 h-28 md:w-40 md:h-40 rounded-full "
            alt="Profile"
          />
        </div>
        <div className="profile-info flex-1 mt-6">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-2xl font-light">{profileData.username}</h1>
            <img src={star} alt="Star Icon" className="w-4 h-4 mt-1" />
            <button className="bg-gray-200 text-black text-sm font-semibold py-1 px-4 rounded-md flex items-center space-x-1">
  <span>Following</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</button>
          </div>

          <div className="profile-stats flex gap-8 mt-2">
            <span>
              <b>{profileData.postsCount}</b> posts
            </span>
            <span>
              <b>{profileData.followers}</b> followers
            </span>
            <span>
              <b>{profileData.following}</b> following
            </span>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold">{profileData.name}</h2>
          </div>

          <p className="profile-bio mt-2 text-gray-700">{profileData.bio}</p>
          <a
            href={`http://${profileData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-semibold"
          >
            {profileData.website}
          </a>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 relative my-6">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 text-gray-500 font-semibold text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          POSTS
        </span>
      </div>

      <div className="posts-section">
        <PostGrid posts={posts} />
      </div>
    </div>
  );
}
