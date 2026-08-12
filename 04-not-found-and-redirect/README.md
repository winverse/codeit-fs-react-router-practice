# 챌린지: Not Found와 Redirect

## 학습 목표

- `Navigate`와 catch-all Route로 redirect와 404 화면을 구현할 수 있다.

## 수정할 파일

- `src/App.jsx`

## 해야 할 일

- [ ] `NotFoundPage`와 `Navigate`를 import 한다.
- [ ] `/old-home`을 `/`로 redirect하고 현재 history 항목을 교체한다.
- [ ] 정의하지 않은 모든 경로에 `NotFoundPage`를 표시한다.

## 확인하기

- [ ] `/old-home`에 접속하면 URL이 `/`로 바뀌고 홈이 표시된다.
- [ ] 존재하지 않는 경로에서는 404 화면이 표시된다.
- [ ] redirect 뒤 뒤로 가기에서 `/old-home`으로 되돌아가지 않는다.

구현 뒤 `src/answers/App.jsx`와 비교할 수 있습니다.
