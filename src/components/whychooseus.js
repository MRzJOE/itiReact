import React from "react";
import "../styles/index.css"; // تأكد من وجود الملف ده

const WhyChooseUsSection = () => {
  return (
    <div className="why-container">
      <div className="why-imgdiv">
        <img
          src="../assets/0.png"
          alt="Why Choose Us"
          className="why-img"
        />
      </div>

      <div className="why-content">
        <h2 className="why-title">Why People Choose Us?</h2>

        <div className="why-superdiv">
          <div className="why-icon">
            <img src="../assets/1.png" alt="Convenience Icon" />
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
            <img src="../assets/2.png" alt="Variety Icon" />
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
            <img src="../assets/3.png" alt="Burger Icon" />
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
