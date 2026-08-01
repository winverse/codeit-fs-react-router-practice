import { Link, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      <h2>홈</h2>
      <p>홈 화면입니다.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="panel">
      <h2>소개</h2>
      <p>소개 화면입니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>기본 라우팅 실습</h1>
      <p className="hint">
        TODO: Link로 홈과 소개 메뉴를 만들고, Routes와 Route로 두 URL을
        연결하세요.
      </p>
      <section className="panel">
        <HomePage />
        <AboutPage />
      </section>
    </div>
  );
}
