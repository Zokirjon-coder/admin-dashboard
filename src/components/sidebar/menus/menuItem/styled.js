import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 18px;
  background: ${({ active }) => (active === "true" ? "#fff" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  height: 44px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const MenuName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ active }) => (active === "true" ? "#fff" : "#000")};
`;
