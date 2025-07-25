import React from "react";
import "../styles/index.css"; // تأكد من وجود الملف ده
import img0 from "../assets/0.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const WhyChooseUsSection = () => {
  return (
    <div className="why-container">
      <div className="why-imgdiv">
        <img src={img0} alt="Why Choose Us" className="why-img" />
      </div>

      <div className="why-content">
        <h2 className="why-title">Why People Choose Us?</h2>

        <div className="why-superdiv">
          <div className="why-icon">
            <img src={img1} alt="Convenience Icon" />
          </div>
          <div className="why-paragraphs">
            <h3>Convenient and Reliable</h3>
            <p>
              Whether you dine in, take out, or order delivery, our service is
              convenient, fast, and reliable, making mealtime hassle-free.
            </p>
          </div>
        </div>

        <div className="why-superdiv">
          <div className="why-icon">
            <img src={img2} alt="Variety Icon" />
          </div>
          <div className="why-paragraphs">
            <h3>Variety of Options</h3>
            <p>
              From hearty meals to light snacks, we offer a wide range of
              options to suit every taste and craving.
            </p>
          </div>
        </div>

        <div className="why-superdiv">
          <div className="why-icon">
            <img src={img3} alt="Burger Icon" />
          </div>
          <div className="why-paragraphs">
            <h3>Eat Burger</h3>
            <p>
              Our burgers are grilled to perfection, with juicy patties and
              flavorful toppings that make every bite a delicious experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
