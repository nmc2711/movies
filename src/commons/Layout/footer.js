import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrap id="footer">
    <div class="footer-top">
      <div class="inner-wrap">
        <ul class="fnb">
          <li>
            <a href="/megaboxinfo" title="회사소개 페이지로 이동">
              회사소개
            </a>
          </li>
          <li>
            <a href="/recruit" title="인재채용 페이지로 이동">
              인재채용
            </a>
          </li>
          <li>
            <a href="/socialcontribution" title="사회공헌 페이지로 이동">
              사회공헌
            </a>
          </li>
          <li>
            <a href="/partner" title="제휴/광고/부대사업문의 페이지로 이동">
              제휴/광고/부대사업문의
            </a>
          </li>
          <li>
            <a href="/support/terms" title="이용약관 페이지로 이동">
              이용약관
            </a>
          </li>
          <li class="privacy">
            <a href="/support/privacy" title="개인정보처리방침 페이지로 이동">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a
              href="https://jebo.joonganggroup.com/main.do"
              target="_blank"
              title="윤리경영 페이지로 이동"
            >
              윤리경영
            </a>
          </li>
        </ul>

        <a
          href="#layer_looking_theater"
          class="btn-looking-theater"
          title="극장찾기"
        >
          <i class="iconset ico-footer-search"></i> 극장찾기
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="inner-wrap">
        <div class="ci">MEGABOX : Life Theater</div>

        <div class="footer-info">
          <div>
            <address>
              서울특별시 성동구 왕십리로 50, 6층(성수동 1가, 메가박스스퀘어)
            </address>
            <p>ARS 1544-0070</p>
          </div>
          <p>대표자명 김진선</p>
          <p>· 개인정보보호책임자 조상연</p>
          <p>· 사업자등록번호 211-86-59478</p>
          <p>· 통신판매업신고번호 제 833호</p>
          <p class="copy">
            COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved
          </p>
        </div>

        <div class="footer-sns">
          <a
            href="https://twitter.com/megaboxon"
            target="_blank"
            title="MEGABOX 트위터 페이지로 이동"
          >
            <i class="iconset ico-twitter">트위터</i>
          </a>
          <a
            href="https://www.facebook.com/megaboxon"
            target="_blank"
            title="MEGABOX 페이스북 페이지로 이동"
          >
            <i class="iconset ico-facebook">페이스북</i>
          </a>
          <a
            href="http://instagram.com/megaboxon"
            target="_blank"
            title="MEGABOX 인스타그램 페이지로 이동"
          >
            <i class="iconset ico-instagram">인스타그램</i>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.megabox.mop"
            target="_blank"
            title="MEGABOX 구글플레이 페이지로 이동"
          >
            <i class="iconset ico-googleplay">구글플레이</i>
          </a>
          <a
            href="https://itunes.apple.com/kr/app/megabox/id894443858?l=ko&amp;ls=1&amp;mt=8"
            target="_blank"
            title="MEGABOX 앱스토어 페이지로 이동"
          >
            <i class="iconset ico-appstore">앱스토어</i>
          </a>
        </div>
      </div>
    </div>

    <div id="layer_looking_theater" class="layer-looking-theater"></div>
  </FooterWrap>
)

export default Footer

const FooterWrap = styled.footer`
  position: relative;
  min-width: 1100px;
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 0;
  background-color: #f8f8fa;

  .footer-top {
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    padding: 30px 0;

    .fnb {
      float: left;

      li {
        float: left;
        margin-left: 14px;
        a {
          display: block;
          color: #666;
          line-height: 30px;
          font-size: 0.8667em;
        }
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }

  .inner-wrap {
    width: 1100px;
    margin: 0 auto;
  }

  .footer-bottom {
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    padding: 0;

    .ci {
      overflow: hidden;
      display: block;
      float: left;
      width: 150px;
      height: 50px;
      margin: 0 20px 0 0;
      padding: 0;
      text-indent: -9999px;
      background: url(https://img.megabox.co.kr/static/pc/images/common/ci/logo-opacity.png)
        no-repeat center;
    }

    .footer-info {
      float: left;
      font-size: 0.8667em;
      letter-spacing: 0;

      p {
        display: inline-block;
        vertical-align: top;
      }
    }

    .footer-sns {
      float: right;
    }
  }
`
