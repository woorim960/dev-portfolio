import React from "react";
import styled from "styled-components";
import { Icon } from "../../dependencies/@iconify/react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImgContainer = styled.a`
  margin: ${({ logoMargin }) => logoMargin ?? "0px 16px 0px 16px"};
`;

const LogoImg = styled.img``;

const Title = styled.span`
  color: ${({ titleColor }) => titleColor ?? "black"};
  font-size: ${({ titleSize }) => titleSize ?? "24px"};
  font-weight: ${({ titleWeight }) => titleWeight ?? 800};
`;

const Logo = ({ logoOption }) => {
  const { uriToMove, logoImg, title, styles } = logoOption;
  const { logoMargin, titleColor, titleSize, titleWeight } = styles;
  return (
    <Container>
      <LogoImgContainer href={uriToMove} logoMargin={logoMargin}>
        {logoImg ? (
          <LogoImg src={logoImg} />
        ) : (
          <Icon icon="simple-icons:devdotto" color="#434521" fontSize="80px" />
        )}
      </LogoImgContainer>
      <Title
        titleColor={titleColor}
        titleSize={titleSize}
        titleWeight={titleWeight}
      >
        {title}
      </Title>
    </Container>
  );
};

export default Logo;
