// BlogCard.jsx
// Design with ShadCN Components
import { Card, CardContent, CardHeader } from 'shadcn-ui';

export const BlogCard = ({ post }) => (
  <Card>
    <CardHeader>{post.title}</CardHeader>
    <CardContent>{post.content.slice(0, 100)}...</CardContent>
  </Card>
);
