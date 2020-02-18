import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <span>CLUB PENGUIN 2 &reg; {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
