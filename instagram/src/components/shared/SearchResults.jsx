import React, { useState, useEffect } from 'react';
import { client } from '../lib';
import profile from "../../assets/icons/images.jpg";

export default function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await client.get(`/user/searchUser?search=${encodeURIComponent(query.trim())}`);
        setResults(res.data.users || []);
      } catch (error) {
        console.log(error);
        setResults([]);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <h2 className="font-bold mb-3 text-lg">Search</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-2 py-1 border border-gray-300 rounded-[8px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#d2d0d0]"
      />

      {results.length === 0 ? (
        <p>No found</p>
      ) : (
        results.map((user) => (
          <div key={user._id} className="flex items-center gap-3 mb-3">
            <img
              src={profile}
              alt={`${user.username}'s avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm font-medium">{user.username}</p>
          </div>
        ))
      )}
    </div>
  );
}
