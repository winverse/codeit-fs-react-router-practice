import { Link, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      {/* TODO: 홈 페이지의 title과 description meta를 추가하세요. */}
      <h2>홈</h2>
      <p>브라우저 탭의 제목과 문서의 description을 확인하세요.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="panel">
      {/* TODO: 소개 페이지의 title과 description meta를 추가하세요. */}
      <h2>소개</h2>
      <p>페이지별로 다른 문서 정보를 사용해 보세요.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>동적 Head 실습</h1>
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
