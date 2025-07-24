import React from "react";
import "../styles/details.css";
import { Link } from "react-router-dom";


const BlogDetails = () => {
  return (
    
    <div className="container-sm">
      
      <div className="main-content">
        <img src="../assets/salad.jpg" className="blog-image" alt="Salad" />
        <div className="meta">By Admin | 07 Comments | Date: 09.07.2024</div>
        <h2>Health Benefits of a Raw food</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus
          odio nobis non voluptatem laudantium magni voluptas dicta explicabo
          commodi!
        </p>

        {/* Related Posts */}
        <div className="related-posts">
          <h3>Related Posts</h3>
          <div className="row gx-3">
            <div className="col-12 col-lg-6 pb-3">
              <img src="../assets/juice.jpg" className="img-fluid w-100" alt="Juice" />
            </div>
            <div className="col-12 col-lg-6">
              <img src="../assets/pasta.jpg" className="img-fluid w-100" alt="Pasta" />
            </div>
          </div>
        </div>

        <div className="comment-section">
          <h3>Comment</h3>
          <p>
            <strong>John Martin:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Asperiores officiis magni explicabo fuga molestiae!
          </p>
          
        </div>

        <div className="tags">
          <strong>Tags:</strong> Catalog, Appetizer, Meat Food
        </div>
        
      </div>
       <div className="pagination">
      <Link to="/us">
        <button>NEXT</button>
      </Link>
    </div>
    </div>
    
  );
};

export default BlogDetails;
