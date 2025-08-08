import React from 'react';
import './gallery.css';

// Dynamically import all images from the gallery folder
function importAll(r) {
  return r.keys().map(r);
}

const photos = importAll(
  require.context('../assets/images/gallery', false, /\.(jpe?g|png|gif)$/i)
);

export default function Gallery() {
  return (
    <div className="gallery-page">
      <h1>Our Work Gallery</h1>
      <p>Browse before-and-after shots and completed projects.</p>
      <div className="gallery-grid">
        {photos.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img src={src.default || src} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
