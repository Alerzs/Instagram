import React, { useEffect } from "react";
import first from "../../assets/icons/first.png"
import gray from "../../assets/icons/gray.png"
import libr from "../../assets/icons/libr.png"
import red from "../../assets/icons/red.png"
import ProfileIcon from "../../assets/icons/Profile.png"
import { client } from "../lib";

const profileData = {
  username: "alirezashams",
  postsCount: "11",
  followers: "41",
  following: "17",
  name: "Upvox",
  type: "Product/service",
  bio: "Your favourite fun clips 🎦 in your language 🌎",
  website: "upvox.net",
  profilePicUrl: ProfileIcon,
};

const PostGrid = ({ posts }) => {
  return (
    <div className="profile-posts-grid grid grid-cols-3 gap-px">
      {posts.map((post) => (
        <div key={post.id} className="post-item aspect-square w-[300px] h-[300px] relative">
          <img
            src={post.imageUrl}
            alt="Post"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default function profile() {

  const posts = [
    { id: 1, imageUrl: first },
    { id: 2, imageUrl: red },
    { id: 3, imageUrl: libr },
    { id: 4, imageUrl: gray },
    { id: 5, imageUrl: gray },
    { id: 6, imageUrl: gray },
    { id: 7, imageUrl: gray },
    { id: 8, imageUrl: gray },
    { id: 9, imageUrl: gray },
    { id: 10, imageUrl: gray },
  ];
async function getFollowers(){

  try {

    const res = await client.get('/api/user/followings/johndoe')
    // const result = res.following
    console.log(res);
    
  } catch (error) {
    console.log(error);
    
  }
}
useEffect(()=>{
  getFollowers()
},[])
  return (
    <div className="profile-container mx-auto px-4 sm:px-10 max-w-5xl">
      <div className="profile-header flex items-center mb-8">
        <div className="profile-pic-container mr-8">

          <img src={profileData.profilePicUrl} className="profile-pic w-24 h-24 rounded-full object-cover" alt="Profile" />
        </div>
        <div className="profile-info flex-1">

          <h1 className="text-2xl font-bold">{profileData.username}</h1>

          <div className="profile-stats flex gap-4 mt-2">
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
            <p className="text-gray-500 text-sm">{profileData.type}</p>
          </div>

          <p className="profile-bio mt-2 text-gray-700">{profileData.bio}</p>
          <a href={`http://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {profileData.website}
          </a>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 relative my-6">
      <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 text-gray-500 font-semibold text-sm">
        
      </span>
    </div>

      <div className="posts-section">
        <h3 className="text-xl font-semibold mb-4">Posts</h3>
        <PostGrid posts={posts} />
      </div>
    </div>
  );
}