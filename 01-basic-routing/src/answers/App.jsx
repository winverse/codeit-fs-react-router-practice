import { Link, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      <h2>홈</h2>
      <p>React Router 기본 라우팅 예제입니다.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="panel">
      <h2>소개</h2>
      <p>URL과 화면을 Route로 연결합니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>기본 라우팅</h1>
      <nav aria-label="주요 메뉴">
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
