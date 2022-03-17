import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({openSidebar})=>openSidebar?'346px':'68px'};
  width: 100%;
  background: #f9fafb;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
