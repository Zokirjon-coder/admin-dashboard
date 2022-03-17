import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: ${({ openSidebar }) => (openSidebar ? "20px" : "24px")};
  padding: 0 12px;
  transition: 0.5s;
`;


