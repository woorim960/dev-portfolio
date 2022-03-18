import React from "react";
import styled from "styled-components";
import { Icon } from "../../../dependencies/@iconify/react/dist/iconify";

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${({ margin }) => margin ?? "10px 3px"};
`;

const Name = styled.span`
  margin-left: 8px;
  font-weight: bold;
`;

const TechStackName = ({ nameOption: { name, iconColor, size } }) => {
  return (
    <NameContainer>
      <Icon
        icon={`simple-icons:${name.toLowerCase()}`}
        color={iconColor}
        fontSize={size}
      />
      <Name fontSize={size}>{name}</Name>
    </NameContainer>
  );
};

export default TechStackName;
