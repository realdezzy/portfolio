import React from 'react';
import { posts } from "../../content_option";
import './blog.css';

const BlogList = () => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <img src={post.imageUrl} alt={post.title} />
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
