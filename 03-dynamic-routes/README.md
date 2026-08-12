# 챌린지: Dynamic Routes

## 학습 목표

- 동적 세그먼트와 `useParams`로 상품 상세 화면을 구현할 수 있다.

## 시작 상태

상품 목록과 상세 UI, 상품 데이터는 준비되어 있습니다. 상세 화면은 설명용 placeholder 상품을 표시하며 동적 Route·두 import·조회·미존재 처리가 TODO 상태입니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/App.jsx`
- `src/pages/ProductDetailPage/ProductDetailPage.jsx`

`ProductDetailPage.jsx`의 TODO 1·2는 파일 최상위 import 위치입니다. TODO 3은 `const product = {`부터 닫는 `};`까지의 placeholder 객체 전체 교체 범위이고, TODO 4는 미존재 조기 반환의 삽입 위치입니다.

## 해야 할 일

- [ ] `/products/:productId` route와 `ProductDetailPage`를 연결한다.
- [ ] 파일 최상위 TODO 1·2에서 `useParams`와 `products`를 import한다.
- [ ] TODO 3의 placeholder 객체 전체를 교체하여 `useParams`로 `productId`를 읽고 `products`에서 같은 상품을 찾는다.
- [ ] 상품이 없으면 "상품을 찾을 수 없습니다." 메시지를 표시한다.

## 확인하기

- [ ] 상품 링크를 누르면 해당 ID의 상세 화면이 표시된다.
- [ ] 주소창에서 `/products/3`으로 이동하면 블루투스 키보드가 표시된다.
- [ ] `/products/99`에서는 없는 상품 안내가 표시되고 런타임 오류가 나지 않는다.

구현 뒤 `src/answers/App.jsx`와 `src/pages/ProductDetailPage/answers/ProductDetailPage.jsx`를 확인할 수 있습니다.
