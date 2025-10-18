<template>
  <footer class="villa-footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- <div class="footer-section">
          <h3>FIND US</h3>
          <div class="footer-info">
            <p>123 Niagara Vineyard Lane</p>
            <p>Grimsby, Ontario L3M 4E8</p>
            <p>Canada</p>
          </div>
        </div> -->
        <div class="footer-section">
          <h3>CONTACT US</h3>
          <div class="footer-info">
            <p>Phone: 2898855376</p>
            <p>Email: syx25144771@gmail.com</p>
          </div>
        </div>
        <div class="footer-section">
          <h3>COPYRIGHT</h3>
          <div class="footer-info">
            <p>&copy; 2025 En Gedi House. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Welcome to En Gedi. May your heart find rest in His presence.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Styles */
.villa-footer {
  background: var(--villa-bg-tertiary);
  color: var(--villa-text-secondary);
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
  color: var(--villa-text-muted);
  font-size: 0.95rem;
}

.footer-info p:hover {
  color: #f39c12;
  transition: color 0.3s ease;
}

.footer-bottom {
  border-top: 1px solid var(--villa-border-color);
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: var(--villa-text-muted);
  font-size: 0.9rem;
}

/* Footer Responsive Design */
@media (max-width: 768px) {
  .villa-footer {
    padding: 40px 0 20px;
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