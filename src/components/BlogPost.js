import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownIt from 'markdown-it';

// Create a single instance of MarkdownIt
const md = new MarkdownIt();

// Dynamically import all markdown posts
const rawPosts = require.context('../blog-posts', false, /\.md$/);

const allPosts = rawPosts.keys().map((key) => {
  const moduleContent = rawPosts(key);
  const rawContent =
    typeof moduleContent === 'string'
      ? moduleContent
      : moduleContent.default || '';
  // Split frontmatter and content
  const sections = rawContent.split(/---\s*/).filter(Boolean);
  const [fm, ...rest] = sections;
  // Parse frontmatter lines
  const meta = {};
  fm.split('\n').forEach((line) => {
    const [k, ...vals] = line.split(':');
    if (k && vals.length) {
      meta[k.trim()] = vals.join(':').trim().replace(/^"|"$/g, '');
    }
  });
  const slug = key.match(/\.\/(.+)\.md$/)[1];
  return {
    slug,
    title: meta.title || '',
    date: meta.date || '',
    htmlContent: md.render(rest.join('---'))
  };
});
console.log('found blog slugs:', allPosts.map(p => p.slug));

export default function BlogPost() {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />
      <Link to="/blog">← Back to Blog</Link>
    </article>
  );
}
