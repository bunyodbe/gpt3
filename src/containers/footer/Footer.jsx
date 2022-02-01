import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";
function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <button>Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Overons</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
            <li>
              <a href="#">Counters</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href="#">
                Crechterwoord K12 <br /> 182 DK Alknjkcb
              </a>
            </li>
            <li>
              <a href="tel:085132567">085-132567</a>
            </li>
            <li>
              <a href="mailto:info@payme.net">info@payme.net</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
