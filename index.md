---
layout: page
---

<div class="villa-hero">
  <div class="hero-content">
    <h1 class="hero-title">En Gedi House</h1>
    <p class="hero-subtitle">En Gedi is a hidden place for the soul — a space to listen, to rest, and to be restored by the gentle whisper of God.</p>
    <p class="hero-subtitle">We invite you to pause, breathe, and draw near to the Source of Living Water.</p>
    <p class="hero-subtitle hero-subtitle-tip">“The wilderness and the dry land shall be glad; the desert shall rejoice and blossom like the rose.” — Isaiah 35 : 1</p>
  </div>
</div>

<!-- Villa Gallery Section -->
<div class="villa-gallery">
  <div class="gallery-container">
    <div class="gallery-header">
      <h2 class="gallery-title">Retreat · Prayer · Fellowship · Restoration</h2>
      <p class="gallery-subtitle">Find peace. Be still. Encounter the Living God.</p>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item large">
        <div class="image-container gallery-image-1">
          <div class="image-overlay">
            <div class="overlay-content">
              <h3>A Spring in the Wilderness</h3>
              <p>A place of quiet waters, where weary souls are restored in God’s presence.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="image-container gallery-image-2">
          <div class="image-overlay">
            <div class="overlay-content">
              <h3>Beautiful Exterior</h3>
              <p>Stunning architecture in a serene environment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Footer Section -->
<Footer />

<!-- Floating Book Room Button -->
<div class="floating-book-btn">
  <a href="/rooms" class="book-room-btn">
    <span class="btn-text">Book a Room</span>
  </a>
</div>

<style>
.villa-hero {
  width: 100vw;
  height: calc(100vh - var(--vp-nav-height));
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./.vitepress/theme/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 0;
  padding: 0;
}

.hero-content {
  padding: 0 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0 0 30px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.9;
  letter-spacing: 0.5px;
  line-height: 1.5;
  max-width: 1200px;
}

.hero-subtitle-tip {
  color: #ccc;
  margin-top: 10px;
  font-size: 1.2rem;
  font-style: italic;
  opacity: 0.85;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Ensure no margins or padding on the page */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Override VitePress container styles */
.VPContent,
.VPDoc,
.container,
.content,
main {
  margin: 0;
  padding: 0;
  max-width: none;
  width: 100%;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    padding: 0 42px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    padding: 0 36px;
    line-height: 1.4;
  }
}

/* Villa Gallery Styles */
.villa-gallery {
  position: relative;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 0;
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.gallery-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.gallery-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.gallery-item {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.gallery-item.large {
  grid-row: span 2;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.gallery-item.large .image-container {
  min-height: 600px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover .image-container img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 40px 30px 30px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
}

.gallery-image-1 {
  background-image: url('./.vitepress/theme/assets/background2.jpg');
}

.gallery-image-2 {
  background-image: url('./.vitepress/theme/assets/background3.jpg');
}

.overlay-content h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.overlay-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .villa-gallery {
    padding: 60px 0;
  }
  
  .gallery-container {
    padding: 0 15px;
  }
  
  .gallery-title {
    font-size: 2.2rem;
  }
  
  .gallery-subtitle {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .gallery-item.large {
    grid-row: span 1;
  }
  
  .image-container,
  .gallery-item.large .image-container {
    min-height: 300px;
  }
  
  .image-overlay {
    padding: 30px 20px 20px;
  }
  
  .overlay-content h3 {
    font-size: 1.3rem;
  }
  
  .overlay-content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .gallery-title {
    font-size: 1.8rem;
  }
  
  .gallery-subtitle {
    font-size: 1rem;
  }
  
  .image-container,
  .gallery-item.large .image-container {
    min-height: 250px;
  }
}
  
  /* Floating Book Room Button */
  .floating-book-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000;
  }

  .book-room-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
  }

  .book-room-btn:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #e67e22 0%, #d35400 100%);
  }

  .book-room-btn:active {
    transform: translateY(-1px);
  }

  .btn-text {
    white-space: nowrap;
  }

  /* Responsive Design for Floating Button */
  @media (max-width: 768px) {
    .floating-book-btn {
      bottom: 20px;
      right: 20px;
    }

    .book-room-btn {
      padding: 12px 20px;
      font-size: 0.9rem;
    }

    .btn-icon {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .floating-book-btn {
      bottom: 15px;
      right: 15px;
    }

    .book-room-btn {
      padding: 10px 16px;
      font-size: 0.85rem;
      gap: 8px;
    }

    .btn-icon {
      font-size: 1.3rem;
    }
  }
</style>

