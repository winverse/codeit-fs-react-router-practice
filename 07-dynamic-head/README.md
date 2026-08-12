# 챌린지: Dynamic Head

## 학습 목표

- React 19의 `title`과 `meta`로 라우트별 metadata를 작성할 수 있다.

## 수정할 파일

- `src/pages/Portfolio/PortfolioPage.jsx`
- `src/pages/Contact/ContactPage.jsx`

## 해야 할 일

- [ ] Portfolio 페이지에 고유한 title과 description을 추가한다.
- [ ] Portfolio 페이지에 `og:title`, `og:description`, `og:image`, `og:image:alt`를 추가한다.
- [ ] Contact 페이지에 Portfolio와 다른 title과 description을 추가한다.

## 확인하기

- [ ] `/portfolio`와 `/contact`에서 브라우저 탭 제목이 서로 다르다.
- [ ] 개발자 도구의 `head`에서 현재 라우트의 description을 확인할 수 있다.
- [ ] Portfolio에서 Open Graph metadata를 확인할 수 있다.
- [ ] 의도하지 않은 title이 여러 개 남지 않는다.

구현 뒤 `src/pages/Portfolio/answers/PortfolioPage.jsx`와 `src/pages/Contact/answers/ContactPage.jsx`를 확인할 수 있습니다.
