import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SideContainer from "./SideContainer/SideContainer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ headerHeight }) => headerHeight ?? "100px"};
  width: ${({ headerWidth }) => headerWidth ?? "100%"};
  background-color: ${({ headerBackgroundColor }) =>
    headerBackgroundColor ?? "whitesmoke"};
`;

const logoOptionDefault = {
  uriToMove: "/",
  logoImg: undefined,
  title: "dev-portfolio",
  styles: {
    logoMargin: "0px 16px 0px 16px",
    titleColor: "black",
    titleSize: "32px",
    titleWeight: "800",
  },
};

const channelsDefault = [
  { name: "github", uriToMove: "https://", color: "#181717BB", size: "30px" },
  { name: "naver", uriToMove: "https://", color: "#47A141BB", size: "30px" },
  { name: "facebook", uriToMove: "https://", color: "#1877F2BB", size: "30px" },
  { name: "youtube", uriToMove: "https://", color: "#FF0000BB", size: "30px" },
];

const sideBarOptionDefault = {
  mainTitle: "dev-portfolio",
  items: [
    {
      title: "TechStacks",
      uriToMove: "/#Tech-Stack",
    },
    {
      title: "Contact",
      uriToMove: "/#Contact",
    },
  ],
  styles: { size: "50px", margin: "0px 12px 0px 24px" },
};

const Header = ({
  logoOption = logoOptionDefault,
  channels = channelsDefault,
  sideBarOption = sideBarOptionDefault,
}) => {
  return (
    <Container>
      <Logo logoOption={{ ...logoOptionDefault, ...logoOption }}></Logo>
      <SideContainer
        channels={channels}
        sideBarOption={{ ...sideBarOptionDefault, ...sideBarOption }}
      ></SideContainer>
    </Container>
  );
};

export default Header;
