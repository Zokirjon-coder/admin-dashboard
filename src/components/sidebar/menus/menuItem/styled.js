import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: ${({ openSidebar }) => (openSidebar ? "100%" : "36px")};
  border-radius: 18px;
  background: ${({ active }) => (active === "true" ? "#fff" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: ${({ openSidebar }) =>
    openSidebar ? "flex-start" : "center"};
  gap: ${({ openSidebar }) => (openSidebar ? "15px" : "0")};
  ${({ active }) =>
    active === "true" &&
    "box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06)"};
  border-radius: 5px;
  height: ${({ openSidebar }) => (openSidebar === "true" ? "44px" : "36px")};
  padding: ${({ openSidebar }) => (openSidebar ? "11px 15px" : "8px")};
  margin-bottom: 23px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
      0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
    background: #fff;
    transition: 0.3s;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const MenuName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #374151;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.5s;
  ${({ openSidebar }) => (openSidebar ? {
    width: "100%"
  } : {
    width: 0
  })};
`;
