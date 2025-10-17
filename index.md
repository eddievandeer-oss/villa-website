---
layout: page
---

<div class="villa-hero">
  <div class="hero-content">
    <h1 class="hero-title">Canada Ontario Niagara Grimsby</h1>
  </div>
</div>

<!-- Villa Gallery Section -->
<div class="villa-gallery">
  <div class="gallery-container">
    <div class="gallery-header">
      <h2 class="gallery-title">Luxury Villa Showcase</h2>
      <p class="gallery-subtitle">Experience the elegance and comfort of our premium villa</p>
    </div>
    <div class="gallery-grid">
      <div class="gallery-item large">
        <div class="image-container" style="background-image: url('./.vitepress/theme/assets/background2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
          <div class="image-overlay">
            <div class="overlay-content">
              <h3>Elegant Interior</h3>
              <p>Luxurious living spaces designed for comfort and style</p>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-item">
        <div class="image-container" style="background-image: url('./.vitepress/theme/assets/background3.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
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
<footer class="villa-footer">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>FIND US</h3>
        <div class="footer-info">
          <p>123 Niagara Vineyard Lane</p>
          <p>Grimsby, Ontario L3M 4E8</p>
          <p>Canada</p>
        </div>
      </div>
      <div class="footer-section">
        <h3>CONTACT US</h3>
        <div class="footer-info">
          <p>Phone: +1 (905) 555-0123</p>
          <p>Email: info@casablancavilla.com</p>
          <p>WhatsApp: +1 (905) 555-0124</p>
        </div>
      </div>
      <div class="footer-section">
        <h3>VILLA CASABLANCA</h3>
        <div class="footer-info">
          <p>Luxury accommodation in the heart of Niagara wine country</p>
          <p>Experience elegance and tranquility</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 The Casablanca Villa. All rights reserved.</p>
    </div>
  </div>
</footer>

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
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
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
  
  /* Footer Styles */
  .villa-footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: #ecf0f1;
    padding: 60px 0 20px;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .footer-section h3 {
    color: #f39c12;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .footer-info p {
    margin: 8px 0;
    line-height: 1.6;
    color: #bdc3c7;
    font-size: 0.95rem;
  }
  
  .footer-info p:hover {
    color: #f39c12;
    transition: color 0.3s ease;
  }
  
  .footer-bottom {
    border-top: 1px solid #34495e;
    padding-top: 20px;
    text-align: center;
  }
  
  .footer-bottom p {
    margin: 0;
    color: #95a5a6;
    font-size: 0.9rem;
  }
  
  /* Footer Responsive Design */
  @media (max-width: 768px) {
    .villa-footer {
      padding: 40px 0 20px;
      margin-top: 60px;
    }
    
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;
    }
    
    .footer-section h3 {
      font-size: 1.1rem;
    }
    
    .footer-info p {
      font-size: 0.9rem;
    }
  }
</style>

