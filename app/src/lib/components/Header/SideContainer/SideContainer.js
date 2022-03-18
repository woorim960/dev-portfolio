import React from "react";
import styled from "styled-components";

import Channels from "./Channels";
import { FaBars } from "../../../dependencies/react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SideBar = styled.div`
  cursor: pointer;
  margin: ${({ margin }) => margin ?? "0px 12px 0px 24px"};
  border: 0px;
`;

const SideContainer = ({ channels, sidebarOption }) => {
  const { size, margin } = sidebarOption.styles;
  return (
    <Container>
      <Channels channels={channels}></Channels>
      <SideBar margin={margin}>
        <FaBars fontSize={size} />
      </SideBar>
    </Container>
  );
};

export default SideContainer;
