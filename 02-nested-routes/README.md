# 챌린지: Nested Routes

## 학습 목표

- 중첩 Route와 `Outlet`, index route를 설정할 수 있다.

## 수정할 파일

- `src/App.jsx`
- `src/pages/ProductsPage/ProductsPage.jsx`

## 해야 할 일

- [ ] `App.jsx`에서 `/products`에 `ProductsPage`를 연결하고 그 아래에 index route와 `category` 자식 route를 추가한다.
- [ ] `ProductsPage`에 `/products`, `/products/category` 링크를 추가한다.
- [ ] 자식 route의 화면이 표시될 위치에 `Outlet`을 추가한다.

## 확인하기

- [ ] `/products`에서 `ProductsHomePage`가 표시된다.
- [ ] `/products/category`에서 `CategoryPage`가 표시된다.
- [ ] 두 자식 화면이 모두 `ProductsPage` 레이아웃 안에 표시된다.

구현 뒤 `src/answers/App.jsx`와 `src/pages/ProductsPage/answers/ProductsPage.jsx`를 확인할 수 있습니다.
