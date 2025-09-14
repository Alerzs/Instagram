import React, { useState } from 'react';
import { client } from '../lib';
import profile from "../../assets/icons/images.jpg"

export default function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!query.trim()) {
        setResults([]);
        return;
      }

      try {
        const res = await client.get(`/user/searchUser?search=${query.trim()}`);
        setResults(res.data.users || []);
      } catch (error) {
        console.log(error);
        setResults([]);
      }
    }
  };

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg">Search</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-2 py-1 border border-gray-300 rounded-[8px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#d2d0d0]"
      />

      {results.length === 0 ? (
        <p>No found</p>
      ) : (
        results.map((user) => (
          <div key={user._id} className="flex items-center gap-3 mb-3">
            <img  
              src={profile}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm font-medium">{user.username}</p>
          </div>
        ))
      )}
    </div>
  );
}
