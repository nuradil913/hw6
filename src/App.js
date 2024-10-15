import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

 
  const handleSearch = () => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1>Поиск по постам</h1>

  
      <input
        type="text"
        placeholder="..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Найти</button>

      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;