import React from 'react';
import style from 'styled-components';
import {BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';
import {SiGmail} from 'react-icons/si';

const ContainerFooter = style.section`
    background: #2B3467;
    width: 100%;
    height: 245px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px;

`;

const FooterStyle = style.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const NameContainer = style.div`
padding: 15px;
border-right: 2px solid #FFFFFF;
> p {
    font-weight: 700;
    font-size: 40px;
    line-height: 32px;
}
> span {
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;
}
`

const ContactContainer = style.div`
display: flex;
flex-direction: column;
padding-left: 30px;
> span {
    font-weight: 700;
    font-size: 18px;
    line-height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5em;
}
`

const SocialMediaContainer = style.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 50px;
> a {
    font-size: 50px;
    color: #9599B3;
}
`

const Footer = () => {
  return (
    <ContainerFooter>
        <FooterStyle>
        <NameContainer>
            <p>Ximena Silva</p> <span>© 2023 Ximena Silva. All right reserved</span>
        </NameContainer>
        <ContactContainer>
            <span><BsWhatsapp/> +51 917 052 827</span>
            <span><GrMail/> ximenasilvacotrina@gmail.com</span>
        </ContactContainer>
        </FooterStyle>
        <SocialMediaContainer>
        <a target="_blank" href="https://www.linkedin.com/in/ximenasilva-frontend/" rel="noreferrer"><BsLinkedin/></a>
        <a target="_blank" href='https://github.com/xsilvac' rel="noreferrer"><BsGithub/></a>
        <a target="_blank" href='mailto:ximenasilvacotrina11@gmail.com' rel="noreferrer"><SiGmail/></a>
        </SocialMediaContainer>
    </ContainerFooter>
  )
}

export default Footer