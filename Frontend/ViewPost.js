// pages/posts/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`).then((response) => {
        setPost(response.data);
      });
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
