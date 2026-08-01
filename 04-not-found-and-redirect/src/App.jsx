import { Link, Navigate, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      <h2>홈</h2>
      <p>이전 주소와 없는 주소를 눌러 현재 동작을 확인하세요.</p>
    </section>
  );
}

function ProfilePage() {
  return (
    <section className="panel">
      <h2>프로필</h2>
      <p>새 프로필 주소입니다.</p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="panel">
      <h2>페이지를 찾을 수 없습니다.</h2>
      <Link to="/">홈으로</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>리다이렉트와 Not Found 실습</h1>
      <nav aria-label="예제 메뉴">
        <Link to="/">홈</Link>
        <Link to="/profile">프로필</Link>
        <Link to="/legacy-profile">이전 프로필 주소</Link>
        <Link to="/missing">없는 주소</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* TODO: /legacy-profile을 /profile로 대체 이동시키세요. */}
        {/* TODO: 일치하지 않는 모든 경로에 NotFoundPage를 표시하세요. */}
      </Routes>
    </div>
  );
}
