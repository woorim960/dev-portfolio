import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Channels from "../../Channels/Channels";
import { FaBars } from "../../../dependencies/react-icons/fa";

const showUp = keyframes`
  from {
    right: -40%;
  }
  to {
    right: 0%;
  }
`;

const showOut = keyframes`
  from {
    right: 0%;
  }
  to {
    right: -40%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideBarIcon = styled.div`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? "0px 12px 0px 24px"};
  border: 0px;
`;

const SideBar = styled.div`
  position: absolute;
  top: 0%;
  right: ${({ isClickedSideBarIcon }) =>
    isClickedSideBarIcon ? "0%" : "-40%"};
  z-index: 1011;
  width: 30%;
  max-width: 280px;
  height: 100%;
  padding: 16px;
  background-color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  animation: 0.3s
    ${({ isClickedSideBarIcon }) => (isClickedSideBarIcon ? showUp : showOut)};
`;

const SideBarBackground = styled.div`
  display: ${({ isClickedSideBarIcon }) =>
    isClickedSideBarIcon ? "block" : "none"};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;

const MainTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Line = styled.hr`
  border: 0.05px solid #00000022;
`;

const ItemContainer = styled.div`
  color: ${({ color }) => color ?? "black"};
  text-decoration: none;
  &hover {
    text-decoration: underline;
  }
`;

const Item = styled.div`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? "10px 0px"};
`;

const SideContainer = ({ channels, sideBarOption }) => {
  const { mainTitle, items, styles } = sideBarOption;
  const { size, margin } = styles;
  const [isClickedSideBarIcon, setIsClickedSideBarIcon] = useState(false);

  return (
    <Container>
      <Channels channels={channels}></Channels>
      <SideBarIcon
        margin={margin}
        onClick={() => setIsClickedSideBarIcon(true)}
      >
        <FaBars fontSize={size} />
      </SideBarIcon>
      <SideBar isClickedSideBarIcon={isClickedSideBarIcon}>
        <MainTitle>{mainTitle}</MainTitle>
        <Line></Line>
        {items?.map(({ title, uriToMove }) => (
          <ItemContainer
            // href={uriToMove}
            onClick={() => {
              setIsClickedSideBarIcon(false);
              document
                .getElementById(title)
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Item>{title}</Item>
          </ItemContainer>
        ))}
      </SideBar>
      <SideBarBackground
        isClickedSideBarIcon={isClickedSideBarIcon}
        onClick={() => setIsClickedSideBarIcon(false)}
      />
    </Container>
  );
};

export default SideContainer;
