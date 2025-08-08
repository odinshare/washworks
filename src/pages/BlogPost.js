import MarkdownIt from 'markdown-it';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './blogpost.css';

// Helper to import all posts
function importAll(r) {
  const map = {};
  r.keys().forEach((key) => {
    const module = r(key);
    const slug = key.replace('./', '').replace(/\.(html|md)$/, '');
    map[slug] = module.default || module; // raw HTML or markdown string
  });
  return map;
}

// Load raw content via raw-loader
const posts = importAll(
  require.context('!!raw-loader!../blog-posts', false, /\.(html|md)$/)
);

const md = new MarkdownIt();

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (posts[slug]) {
      let raw = posts[slug];
      // Strip front matter
      raw = raw.replace(/^---[\s\S]*?---/, '').trim();
      // If markdown, convert to HTML
      const html = /\.md$/.test(slug) ? md.render(raw) : raw;
      setContent(html);
    } else {
      setContent('<p>Post not found.</p>');
    }
  }, [slug]);

  return (
    <div className="blogpost-page">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}