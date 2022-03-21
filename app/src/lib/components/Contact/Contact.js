import React from "react";
import styled from "styled-components";

import Channels from "../Channels/Channels";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: whitesmoke;
  padding: 10px 10px;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const SubTitle = styled.span``;

const SendEmailButton = styled.button`
  padding: 10px 10px;
  margin: 10px 0px 0px 0px;
  background-color: white;
  border-radius: 4px;
  border: 0.5px solid #00000033;
  cursor: pointer;
  &active {
    background-color: red;
  }
`;

const AboutMe = styled.div`
  margin: 10px 0px;
`;

const AboutMeEachContainer = styled.div`
  margin: 10px 0px 10px 10px;
`;

const AboutMeTitle = styled.div`
  font-weight: bold;
  color: #00000066;
`;

const AboutMeDescription = styled.div``;

const contactOptionDefault = {
  title: "안녕하세요 풀스택 개발자 박우림입니다.",
  subTitle: "저에게 관심이 생기신 분들은 아래 버튼을 눌러주세요 :D",
  buttonText: "Want to work with me?",
  channels: [
    {
      name: "github",
      uriToMove: "https://",
      color: "#181717BB",
      size: "18px",
      margin: "0px 12px 0px 0px",
    },
    {
      name: "naver",
      uriToMove: "https://",
      color: "#47A141BB",
      size: "18px",
      margin: "0px 12px 0px 0px",
    },
    {
      name: "facebook",
      uriToMove: "https://",
      color: "#1877F2BB",
      size: "18px",
      margin: "0px 12px 0px 0px",
    },
    {
      name: "youtube",
      uriToMove: "https://",
      color: "#FF0000BB",
      size: "18px",
      margin: "0px 12px 0px 0px",
    },
  ],
  aboutMeInfos: [
    {
      title: "Where I live",
      description: "Gangdong-gu, Seoul, Republic of Korea",
    },
    {
      title: "Give me a call",
      description: "T. +82 (0)10 1234 5678",
    },
    {
      title: "Or, why don’t you email me?",
      description: "dev-portfolio@gmail.com",
    },
  ],
};

const Contact = ({ contactOption = contactOptionDefault }) => {
  const { title, subTitle, buttonText, channels, aboutMeInfos } = contactOption;
  return (
    <Container id="Contact">
      <ContactForm>
        <Channels channels={channels}></Channels>
        <TitleContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </TitleContainer>
        <SendEmailButton>{buttonText}</SendEmailButton>
      </ContactForm>
      <AboutMe>
        {aboutMeInfos.map(({ title, description }, idx) => (
          <AboutMeEachContainer key={idx}>
            <AboutMeTitle>{title}</AboutMeTitle>
            <AboutMeDescription>{description}</AboutMeDescription>
          </AboutMeEachContainer>
        ))}
      </AboutMe>
    </Container>
  );
};

export default Contact;
