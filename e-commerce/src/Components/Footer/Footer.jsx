import React from "react";
import { FooterStyled, Left, Right, ContactItem, Title } from "./FooterStyled";
import location from "./location.svg";
import contact from "./contact.svg";
import email from "./email.svg";
const Footer = () => {
  return (
    <FooterStyled>
      <Left>
        <h1>Express</h1>
        <p>The number one stop for shoes</p>
        <a
          href="https://ogunleye.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="svgs"
            // ref={(el) => (logo = el)}
            width="100"
            height="60.573"
            viewBox="0 0 256 256"
          >
            <path
              fill="none"
              stroke="#000000"
              strokeWidth="13"
              d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
            />
          </svg>
        </a>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <img src={location} alt="" /> Lagos, Nigeria
        </ContactItem>
        <ContactItem>
          <img src={email} alt="" /> Expressstore@gmail.com
        </ContactItem>
        <ContactItem>
          <img src={contact} alt="" />
          +234 express
        </ContactItem>
      </Right>
    </FooterStyled>
  );
};

export default Footer;
