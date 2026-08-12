# 챌린지: Nested Routes

## 학습 목표

- 중첩 Route와 `Outlet`, index route를 설정할 수 있다.

## 시작 상태

공통 Layout과 Home index Route, Products 관련 페이지 파일은 준비되어 있습니다. `/products` 부모 Route는 `path=""`·`element={null}`인 명시적 stub이고 자식 Route·링크·`Outlet`은 TODO 상태입니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/App.jsx`
- `src/pages/ProductsPage/ProductsPage.jsx`

`App.jsx`에서는 준비된 부모 Route stub의 두 prop을 교체하고, 열린 태그와 닫는 태그 사이의 TODO 2·3 위치에 자식 Route를 추가합니다. 부모 JSX 구조를 새로 추측해 만들지 않습니다.

## 해야 할 일

- [ ] `App.jsx`의 준비된 부모 Route stub을 `/products`와 `ProductsPage`에 연결하고 그 안에 index route와 `category` 자식 route를 추가한다.
- [ ] `ProductsPage`에 `/products`, `/products/category` 링크를 추가한다.
- [ ] 자식 route의 화면이 표시될 위치에 `Outlet`을 추가한다.

## 확인하기

- [ ] `/products`에서 `ProductsHomePage`가 표시된다.
- [ ] `/products/category`에서 `CategoryPage`가 표시된다.
- [ ] 두 자식 화면이 모두 `ProductsPage` 레이아웃 안에 표시된다.

구현 뒤 `src/answers/App.jsx`와 `src/pages/ProductsPage/answers/ProductsPage.jsx`를 확인할 수 있습니다.
