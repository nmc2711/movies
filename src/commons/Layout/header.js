import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  top: 0px;
  z-index: 5;

  /* 폰트 */
  font-size: 2.5rem;
`;

const Header = () => <Wrapper>헤더영역</Wrapper>;

export default Header;
