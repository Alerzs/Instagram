import React from 'react';

export default function Mycontainer({ posts }) {
  return (
    <div className="profile-posts-grid grid grid-cols-3 gap-px">
      {posts.map((post) => (
        <div key={post.id} className="post-item aspect-square w-[300px] h-[300px] relative">
          <img
            src={post.imageUrl}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}