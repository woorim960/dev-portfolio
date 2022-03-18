import React from "react";
import styled from "styled-components";
import { Icon } from "../../../dependencies/@iconify/react";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Channel = styled.a`
  margin: ${({ channelMargin }) => channelMargin ?? "0px 6px 0px 6px"};
`;

const Channels = ({ channels }) => {
  return (
    <Container>
      {channels?.map(({ uriToMove, name, color, size }) => (
        <Channel href={uriToMove}>
          <Icon icon={`simple-icons:${name}`} color={color} fontSize={size} />
        </Channel>
      ))}
    </Container>
  );
};

export default Channels;
