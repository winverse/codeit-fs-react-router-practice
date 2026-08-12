# 챌린지: Basic Routing

## 학습 목표

- `Routes`, `Route`, `Link`로 새로운 페이지를 라우팅에 추가할 수 있다.

## 시작 상태

Home·About 페이지와 두 Route는 연결되어 있고 Services 페이지 파일만 준비되어 있습니다. `src/App.jsx`의 세 TODO는 구현되지 않은 상태입니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/App.jsx`

세 TODO 주석이 각각 import·Link·Route의 정확한 삽입 위치입니다.

## 해야 할 일

- [ ] `ServicesPage`를 import 한다.
- [ ] 헤더에 `/services`로 이동하는 Services 링크를 추가한다.
- [ ] `/services` 경로와 `ServicesPage`를 연결하는 Route를 추가한다.

## 확인하기

- [ ] Services 링크를 누르면 새로고침 없이 `/services`로 이동한다.
- [ ] Services 페이지 내용이 화면에 표시된다.
- [ ] 한 번에 현재 경로와 일치하는 페이지 하나만 표시된다.

구현 뒤 `src/answers/App.jsx`와 비교할 수 있습니다.
