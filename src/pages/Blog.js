import matter from 'gray-matter';
import React from 'react';
import './blog.css';
import { Link } from 'react-router-dom';

// Dynamically import all raw blog post files and parse their frontmatter
function importAll(r) {
  return r.keys().map((key) => {
    const raw = r(key).default; // raw markdown/html string
    const { data, content } = matter(raw);
    const slug = key.match(/\.\/(.+)\.(html|md)$/)[1];
    const excerpt = content.trim().split(/\s+/).slice(0, 30).join(' ') + '...';
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt
    };
  });
}
const posts = importAll(require.context('../blog-posts', false, /\.(html|md)$/));

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>WashWorks Blog</h1>
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug} className="blog-item">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <small className="blog-date">{post.date}</small>
            <p className="blog-excerpt">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
