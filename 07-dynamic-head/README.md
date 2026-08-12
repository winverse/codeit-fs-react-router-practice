# 챌린지: Dynamic Head

## 학습 목표

- React 19의 `title`과 `meta`로 라우트별 metadata를 작성할 수 있다.

## 시작 상태

Home·About의 metadata와 Portfolio·Contact 본문·Route는 준비되어 있습니다. Portfolio·Contact의 TODO 위치에 라우트별 metadata를 추가하며 `public/og-image.svg`는 제공됩니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/pages/Portfolio/PortfolioPage.jsx`
- `src/pages/Contact/ContactPage.jsx`

두 파일 모두 반환문의 `page-content` div 바로 아래 TODO가 metadata의 정확한 삽입 위치입니다. 준비된 본문과 Route는 수정하지 않습니다.

## 해야 할 일

- [ ] Portfolio 페이지에 고유한 title과 description을 추가한다.
- [ ] Portfolio 페이지에 `og:title`, `og:description`, `og:image`(`/og-image.svg`), `og:image:alt`를 추가한다.
- [ ] Contact 페이지에 Portfolio와 다른 title과 description을 추가한다.

## 확인하기

- [ ] `/portfolio`와 `/contact`에서 브라우저 탭 제목이 서로 다르다.
- [ ] 개발자 도구의 `head`에서 현재 라우트의 description을 확인할 수 있다.
- [ ] Portfolio에서 Open Graph metadata를 확인할 수 있다.
- [ ] 의도하지 않은 title이 여러 개 남지 않는다.

구현 뒤 `src/pages/Portfolio/answers/PortfolioPage.jsx`와 `src/pages/Contact/answers/ContactPage.jsx`를 확인할 수 있습니다.
