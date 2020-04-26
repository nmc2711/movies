import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

//styled
const Wrapper = styled.div`
  padding-top: 60px; /* 헤더 높이 */
`;

export default Layout;
