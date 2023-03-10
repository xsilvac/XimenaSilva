import React from "react";
import style from "styled-components";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const ContainerFooter = style.section`
    background: #2B3467;
    width: 100%;
    height: 245px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4.5rem;
    @media screen and (max-width: 1100px) {
        padding: 0 2rem;
      }
    @media screen and (max-width: 860px) {
        padding: 0 1rem;
      }
`;

const FooterStyle = style.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const NameContainer = style.div`
padding: 15px;
border-right: 2px solid #FFFFFF;
@media screen and (max-width: 860px) {
    padding: 0 5px 0 0;
  }
> p {
    font-weight: 700;
    font-size: 40px;
    line-height: 32px;
    @media screen and (max-width: 1100px) {
        font-size: 30px;
      }
    @media screen and (max-width: 860px) {
        font-size: 19px;
      }
    @media screen and (max-width: 400px) {
        font-size: 12px;
      }
}
> span {
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;
    @media screen and (max-width: 1100px) {
        font-size: 10px;
      }
    @media screen and (max-width: 860px) {
        font-size: 7px;
        letter-spacing: 0.2px;
      }
    @media screen and (max-width: 400px) {
        font-size: 5px;
        letter-spacing: 0px;
      }
}
`;

const ContactContainer = style.footer`
display: flex;
flex-direction: column;
padding-left: 30px;
@media screen and (max-width: 860px) {
    padding-left: 13px;
  }
@media screen and (max-width: 400px) {
    padding: 5px;
  }
> span {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5em;
    @media screen and (max-width: 860px) {
        font-size: 10px
      }
    @media screen and (max-width: 400px) {
        font-size: 6px;
      }
}
`;

const SocialMediaContainer = style.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 50px;
@media screen and (max-width: 860px) {
    gap: 10px;
  }
@media screen and (max-width: 400px) {
    flex-direction: column;
  }
> a {
    font-size: 50px;
    color: #9599B3;
    @media screen and (max-width: 860px) {
        font-size: 25px;
      }
      @media screen and (max-width: 400px) {
        font-size: 12px;
      }
}
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <FooterStyle>
        <NameContainer>
          <p>Ximena Silva</p>{" "}
          <span>© 2023 Ximena Silva. All right reserved</span>
        </NameContainer>
        <ContactContainer>
          <span>
            <BsWhatsapp /> +51 917 052 827
          </span>
          <span>
            <GrMail /> ximenasilvacotrina@gmail.com
          </span>
        </ContactContainer>
      </FooterStyle>
      <SocialMediaContainer>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ximenasilva-frontend/"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a target="_blank" href="https://github.com/xsilvac" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          target="_blank"
          href="mailto:ximenasilvacotrina11@gmail.com"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
      </SocialMediaContainer>
    </ContainerFooter>
  );
};

export default Footer;
