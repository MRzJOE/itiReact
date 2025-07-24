import React from "react";
import "../styles/us.css";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <section className="team-section">
      <div className="paginationn" style={{ textAlign: "left", margin: "10px" }}>
        <Link to="/blog">
          <button>BACK</button>
        </Link>
      </div>

      <div className="section-header">
        <img src="/assets/logo.png" className="diamond-image" alt="Logo" />
        <br />
        <div className="orange-bar">
          <h2 style={{ backgroundColor: "#f44336", color: "white" }}>TEAM MEMBERS</h2>
        </div>
      </div>

      <div className="top-member">
        <div className="member">
          <div className="image-placeholder">
            <img src="/assets/constructor.png" alt="Constructor" />
          </div>    
          <h3>mahmoud abdulhamid</h3>
          <p className="position">our constructor</p>
          <div className="member-details">          
            <p>
              Mahmoud Abdulhamid is the foundation of our team's vision. With sharp technical insight
              and outstanding leadership, he brought our ideas to life and made sure every part was built to last.
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="bottom-members">
        <div className="member">
          <div className="image-placeholder">
            <img src="/assets/work.jpg" alt="Mohamed" />
          </div>
          <h3>MOHAMED ELWAKIL</h3>
          <p className="position">Team Member</p>
          <div className="member-details">
            <p>Made this page and the blogs also the footer and header</p>
          </div>
        </div>

        <div className="member">
          <div className="image-placeholder">
            <img src="/assets/work.jpg" alt="Jhon" />
          </div>
          <h3>JHON EZZAT</h3>
          <p className="position">Team Member</p>
          <div className="member-details">
            <p>The best when it comes to javascript made the cart page</p>
          </div>
        </div>

        <div className="member">
          <div className="image-placeholder">
            <img src="/assets/work.jpg" alt="Yasser" />
          </div>
          <h3>MOHAMED YASSER</h3>
          <p className="position">Team Member</p>
          <div className="member-details">
            <p>Made the about us page and the checkout page</p>
          </div>
        </div>

        <div className="member">
          <div className="image-placeholder">
            <img src="/assets/work.jpg" alt="Abdullah" />
          </div>
          <h3>ABDULLAH MOHAMED</h3>
          <p className="position">Team Member</p>
          <div className="member-details">
            <p>Made both of the forms pages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
