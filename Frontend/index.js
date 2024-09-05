// pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from 'shadcn-ui';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      <Link href="/create">
        <Button>Create Post</Button>
      </Link>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}</p>
            <Link href={`/posts/${post.id}`}>
              <Button>View</Button>
            </Link>
            <Button onClick={() => deletePost(post.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
