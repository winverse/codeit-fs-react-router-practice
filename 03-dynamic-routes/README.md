# 챌린지: Dynamic Routes

## 학습 목표

- 동적 세그먼트와 `useParams`로 상품 상세 화면을 구현할 수 있다.

## 수정할 파일

- `src/App.jsx`
- `src/pages/ProductDetailPage/ProductDetailPage.jsx`

## 해야 할 일

- [ ] `/products/:productId` route와 `ProductDetailPage`를 연결한다.
- [ ] `useParams`로 `productId`를 읽고 `products`에서 같은 상품을 찾는다.
- [ ] 상품이 없으면 "상품을 찾을 수 없습니다." 메시지를 표시한다.

## 확인하기

- [ ] 상품 링크를 누르면 해당 ID의 상세 화면이 표시된다.
- [ ] 주소창에서 `/products/3`으로 이동하면 블루투스 키보드가 표시된다.
- [ ] `/products/99`에서는 없는 상품 안내가 표시되고 런타임 오류가 나지 않는다.

구현 뒤 `src/answers/App.jsx`와 `src/pages/ProductDetailPage/answers/ProductDetailPage.jsx`를 확인할 수 있습니다.
