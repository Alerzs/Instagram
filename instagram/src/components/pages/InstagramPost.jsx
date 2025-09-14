import React, { useState } from 'react'
import profileImage from '../../assets/icons/Profile.png'
import postImage from '../../assets/icons/Frame (1).png'

const InstagramPost = ({username, content, likess, comments}) => {
  const commentsCount = comments.length
  const initialLikes = likess.length
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  console.log(initialLikes)
  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="w-[500px] mx-auto bg-white   shadow-md m-4">
      
      <div className="flex items-center p-4">
        <img
          src={profileImage}
          alt={`${username} profile`}
          className="w-10 h-10 rounded-full mr-3"
        />
        <strong className="text-gray-900">{username}</strong>
      </div>

      
      <img
        src={postImage}
        alt="Instagram post"
        className="w-full max-h-[500px] object-cover"
      />

    
      <div className="flex justify-between px-4 py-3">
        <div className="flex space-x-4">

          <button
            aria-label="Like"
            onClick={toggleLike}
            className={`focus:outline-none ${liked ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
          >
            {liked ? (
              <svg aria-hidden="true" fill="currentColor" height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.6 6c-4.5 0-7.9 3.6-9.6 6.6-1.7-3-5.1-6.6-9.6-6.6-6.1 0-11 5.1-11 11.6 0 9.2 9.5 15.3 19.7 26.1l1.9 1.7 1.9-1.7c10.2-10.8 19.7-16.9 19.7-26.1 0-6.5-4.9-11.6-11-11.6z" />
              </svg>
            ) : (
              <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61c-1.54-1.36-3.57-1.81-5.42-1.16-1.54.52-2.76 1.57-3.42 2.77-.66-1.2-1.88-2.25-3.42-2.77-1.85-.65-3.88-.2-5.42 1.16-2.21 1.96-2.44 5.32-.57 7.46L12 21.35l9.23-9.28c1.87-2.14 1.64-5.5-.57-7.46z" />
              </svg>
            )}
          </button>

          
          <button aria-label="Comment" className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </button>

          
        </div>

       
        <button aria-label="Save" className="text-gray-700 hover:text-yellow-600 focus:outline-none">
          <svg aria-hidden="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <polygon points="19 21 12 17 5 21 5 5 19 5 19 21" />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-4">
        <p className="font-bold mb-1">{likes} likes</p>
        <p className="mb-1">{content}</p>
        <p className="text-gray-500 text-sm mb-2">5h</p>
        <p className="text-blue-600 cursor-pointer">{commentsCount} comments</p>
      </div>
    </div>
  );
};

export default InstagramPost;
