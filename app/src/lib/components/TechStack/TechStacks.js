import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { Icon } from "../../dependencies/@iconify/react";

const g = ({ from, to }) => keyframes`
  0% { 
    background-color: ${to || "#434521"}; 
  }
  50% { 
    background-color: ${from || "#607e9e"}; 
  }
  100% { 
    background-color: ${to || "#434521"}; 
  }
`;

const r = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  from { 
    transform: rotate(360deg); 
  }
`;

const TechStack = styled.div`
  margin: ${({ margin }) => margin ?? "10px 30px"};
`;

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

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  background: whitesmoke;
`;

const ProgressBarComplete = styled.div`
  position: absolute;
  left: 0;
  top: 0px;
  height: 100%;
  background-color: #5225bd;
  border-radius: 10px;
  animation: ${({ progressColor }) => g(progressColor ?? {})} 2500ms infinite
    ease-in-out;
  z-index: 2;
`;

const ProgressBarLiquid = styled.div`
  z-index: 1;
  width: 70px;
  height: 70px;
  animation: ${({ progressColor }) => g(progressColor ?? {})} 2500ms infinite
      ease-in-out,
    ${r} 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
  position: absolute;
  right: -5px;
  top: -10px;
  background-color: #5225bd;
  border-radius: 40%;
`;

const ProgressBarInnerText = styled.span`
  z-index: 2;
`;

const TechStacks = ({ techStacksOption }) => {
  techStacksOption = [
    {
      name: "Javascript",
      progress: "45%",
      nameSize: "24px",
      iconColor: "#E2D784",
    },
    {
      name: "HTML5",
      progress: "20%",
      nameSize: "24px",
      iconColor: "#E34F26",
    },
    {
      name: "Nodejs",
      progress: "90%",
      nameSize: "24px",
      iconColor: "#339933",
    },
  ];

  return techStacksOption.map(
    ({
      name,
      progress,
      nameSize,
      iconColor,
      progressColorTo,
      progressColorFrom,
    }) => (
      <TechStack>
        <NameContainer>
          <Icon
            icon={`simple-icons:${name.toLowerCase()}`}
            color={iconColor}
            fontSize={nameSize}
          />
          <Name fontSize={nameSize}>{name}</Name>
        </NameContainer>
        <ProgressBarContainer>
          <ProgressBarComplete
            progressColor={{ from: progressColorFrom, to: progressColorTo }}
            style={{ width: progress }}
          >
            <ProgressBarLiquid
              progressColor={{ from: progressColorFrom, to: progressColorTo }}
            ></ProgressBarLiquid>
          </ProgressBarComplete>
          <ProgressBarInnerText>{progress}</ProgressBarInnerText>
        </ProgressBarContainer>
      </TechStack>
    )
  );
};

export default TechStacks;
