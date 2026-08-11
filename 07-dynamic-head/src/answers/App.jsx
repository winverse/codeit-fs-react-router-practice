import { Link, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      <title>홈 | Router 학습</title>
      <meta
        name="description"
        content="React Router의 기본 개념을 연습하는 홈 페이지입니다."
      />
      <h2>홈</h2>
      <p>브라우저 탭의 제목과 문서의 description 메타 정보를 확인하세요.</p>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="panel">
      <title>소개 | Router 학습</title>
      <meta
        name="description"
        content="React title과 meta 태그 사용 방법을 소개하는 페이지입니다."
      />
      <h2>소개</h2>
      <p>React 19는 컴포넌트의 title과 meta를 문서 head에 반영합니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>동적 Head</h1>
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
