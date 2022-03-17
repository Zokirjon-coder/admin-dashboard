import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ open }) => (open ? "row" : "column")};
  padding: 5px 16px;
  padding-bottom: ${({ open }) => (open ? "5px" : "24px")};
  background: #f9fafb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(0, 0, 0, 0.04),
    0px 1px 8px rgba(0, 0, 0, 0.04);
  row-gap: 13px;
`;
export const Logotip = styled.div`
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span.yellow {
    color: var(--yellow);
  }
  span.hiddenText {
    transition: 0.3s;
    overflow: hidden;
    display: inline-block;
    width: ${({ open }) => (open ? 'content-width' : "0px")};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ open }) => (open ? "space-around" : "center")};
  flex-direction: ${({ open }) => (open ? "row" : "column")};
  gap: 8px;
`;

export const Notification = styled.div`
  width: 8px;
  height: 8px;
  background: #ff4c34;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(0, 0, 0, 0.04),
    0px 1px 8px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  position: relative;
  svg {
    transition: 0.3s;
    transform: rotateY(${({ open }) => (open ? "0deg" : "180deg")});
  }
  :active {
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.04),
      inset 0px 2px 3px rgba(0, 0, 0, 0.04),
      inset 0px 1px 8px rgba(0, 0, 0, 0.04);
  }
`;
