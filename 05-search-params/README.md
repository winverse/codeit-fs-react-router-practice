# 챌린지: Search Params

## 학습 목표

- `useSearchParams`로 검색·정렬 상태를 URL과 연결할 수 있다.

## 시작 상태

검색 폼·정렬 버튼·상품 데이터와 임시 전체 목록 렌더링은 준비되어 있습니다. URL 읽기·갱신, 필터·정렬, 조건부 결과 UI는 TODO 상태입니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/pages/Search/SearchPage.jsx`

TODO 1은 파일 최상위 import, TODO 2는 훅 호출 위치입니다. `handleSort(sortType)`의 매개변수는 준비되어 있으므로 TODO 5에서는 바로 아래 `void sortType;` 한 줄을 함수 본문으로 교체합니다. TODO 7은 주석 바로 아래의 기존 `ul` 전체 교체 범위입니다.

## 해야 할 일

- [ ] TODO 1·2에서 `useSearchParams`를 import하고 호출한 뒤 `search`와 `orderBy`를 읽는다.
- [ ] 검색 폼을 제출하면 `search`를 갱신한다.
- [ ] 정렬 버튼을 누르면 `search`를 유지하며 `orderBy`를 갱신한다.
- [ ] 상품 이름을 필터링하고 가격 오름차순 또는 내림차순으로 정렬한다.
- [ ] 검색 전, 결과 없음, 결과 있음 화면을 구분한다.

## 확인하기

- [ ] `노트북`을 검색하면 URL과 결과가 함께 바뀐다.
- [ ] 정렬 버튼을 눌러도 검색어가 유지된다.
- [ ] 새로고침과 뒤로 가기 뒤에도 URL과 입력값·결과가 일치한다.

구현 뒤 `src/pages/Search/answers/SearchPage.jsx`와 비교할 수 있습니다.
