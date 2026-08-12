# 챌린지: Programmatic Navigation

## 학습 목표

- 폼 제출 뒤 `useNavigate`로 이동하고 history 항목을 교체할 수 있다.

## 수정할 파일

- `src/pages/Contact/ContactPage.jsx`

## 해야 할 일

- [ ] `useNavigate`를 import하고 `navigate` 함수를 가져온다.
- [ ] 폼의 기본 제출 동작을 막는다.
- [ ] 제출 처리가 끝나면 `/success`로 이동하면서 `replace: true`를 사용한다.

## 확인하기

- [ ] 문의 폼을 제출하면 전체 문서 새로고침 없이 `/success`로 이동한다.
- [ ] 성공 화면에서 뒤로 가면 문의 폼이 아니라 홈으로 이동한다.
- [ ] 콘솔과 페이지에 오류가 없다.

구현 뒤 `src/pages/Contact/answers/ContactPage.jsx`와 비교할 수 있습니다.
