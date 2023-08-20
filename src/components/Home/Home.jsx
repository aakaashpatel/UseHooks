import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <h2 className="text-center">Header</h2>
      <div className="card mb-3 card-section">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUwODd8aW1hZ2UvanBlZ3xpbWFnZXMvaDEyL2g2My85NDA3NzQ2MjQ0NjM4LmpwZ3w0OTc2MTIyMWJlODAwMmE1ZDcyY2VlZGQxZGEwMTIxNTJkZDM2NWUyZjM2OWZlMmNiMTRjN2FkMTE5YWE0ZjVj"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Iphone</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="btn ">
                <button type="button rounded ">Shop</button>
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
