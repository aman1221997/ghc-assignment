import React from "react";
import "../css/Section5.css";

function Section5() {
  return (
    <section class="products-section">
      <h1>What you'll love</h1>
      <div class="products-container">
        <div class="product">
          <div class="product-label" id="pastries-image">
            <div className="product-text">
              <h2>PASTRIES</h2>
              <p>Heavenly pastry creations that will satisfy your cravings</p>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-label" id="breads-image">
            <div className="product-text">
              <h2>BREADS</h2>
              <p>Freshly-baked loaves of bread you'll find irresistible</p>
            </div>
          </div>
        </div>
        <div class="product">
          <div class="product-label" id="pastries-image">
            <div className="product-text">
              <h2>COOKIES</h2>
              <p>Deliciously decadent cookies that are sure to impress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
