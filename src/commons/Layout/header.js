import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 100%;
  top: 0px;
  background-color: #111116;
  border-bottom: 1px solid #3b3d3f;
  z-index: 5;

  /* 폰트 */

  /*NAV */
  nav {
    display: flex;
    flex-direction: column;
    width: 1100px;
    height: 100%;
    margin: 0 auto;

    .siteInfoMap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 16px 0;
      font-size: 0.8667em;
      color: #888;
      .leftMap {
        a {
          margin-right: 20px;
          :last-child {
            margin-right: 0;
          }
        }
      }
      .rightMap {
        a {
          margin-right: 20px;
          :last-child {
            margin-right: 0;
          }
        }
      }
    }
    .gnbWrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #fff;
      font-size: 1.2em;
      font-weight: 400;
      .leftGnb {
        a {
          margin-right: 90px;
        }
      }
      .rightGnb {
        a {
          margin-right: 90px;
        }
        a:last-child {
          margin-right: 0.0000001px;
        }
      }
    }
  }
`;

const Logo = styled.a`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  background: url("http://www.hwangsh.com/img/logo-white.png") no-repeat center
    center / cover;
  width: 140px;
  height: 47px;
`;

const Header = () => (
  <Wrapper>
    <nav>
      <div className="siteInfoMap">
        <div className="leftMap">
          <a href="#">VIP LOUNGE</a>
          <a href="#">멤버십</a>
          <a href="#">고객센터</a>
        </div>
        <div className="rightMap">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <a href="#">빠른예매</a>
        </div>
      </div>

      <div className="gnbWrap">
        <div className="leftGnb">
          <a href="#">서치박스</a>
          <a href="#">영화</a>
          <a href="#">예매</a>
        </div>
        <div className="rightGnb">
          <a href="#">이벤트</a>
          <a href="#">스토어</a>
          <a href="#">서치박스</a>
        </div>
      </div>
      <Logo></Logo>
    </nav>
  </Wrapper>
);

export default Header;
