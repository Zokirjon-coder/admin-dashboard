import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ openSidebar }) => (openSidebar ? "90px" : "24px")};
`;


