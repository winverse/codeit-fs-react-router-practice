# 챌린지: Programmatic Navigation

## 학습 목표

- 폼 제출 뒤 `useNavigate`로 이동하고 history 항목을 교체할 수 있다.

## 시작 상태

Home·Contact·Success 페이지와 세 Route, 문의 폼의 submit handler가 준비되어 있습니다. `useNavigate` import·호출과 성공 경로 이동만 TODO 상태입니다.

## 실행하기

이 폴더에서 `npm install` 뒤 `npm run dev`를 실행합니다.

## 수정할 파일

- `src/pages/Contact/ContactPage.jsx`

TODO 1은 파일 최상위 import, TODO 2는 `ContactPage` 함수 시작 부분의 훅 호출, TODO 3은 alert 바로 뒤의 이동 코드 삽입 위치입니다.

## 해야 할 일

- [ ] `useNavigate`를 import하고 `navigate` 함수를 가져온다.
- [ ] 폼의 기본 제출 동작을 막는다.
- [ ] 제출 처리가 끝나면 `/success`로 이동하면서 `replace: true`를 사용한다.

## 확인하기

- [ ] 문의 폼을 제출하면 전체 문서 새로고침 없이 `/success`로 이동한다.
- [ ] 성공 화면에서 뒤로 가면 문의 폼이 아니라 홈으로 이동한다.
- [ ] 콘솔과 페이지에 오류가 없다.

구현 뒤 `src/pages/Contact/answers/ContactPage.jsx`와 비교할 수 있습니다.
