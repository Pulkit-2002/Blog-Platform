// pages/create.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Input, Textarea, Button } from 'shadcn-ui';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { title, content }).then(() => {
      router.push('/');
    });
  };

  return (
    <div>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreatePost;
