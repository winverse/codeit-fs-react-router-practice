import { Link, Outlet, Route, Routes } from 'react-router';

function HomePage() {
  return <p className="panel">홈 화면입니다.</p>;
}

function CommunityPage() {
  return (
    <section className="panel">
      <h2>커뮤니티</h2>
      <p>게시글 목록 화면입니다.</p>
    </section>
  );
}

function NewPostPage() {
  return (
    <section className="panel">
      <h2>글쓰기</h2>
      <p>새 게시글 작성 화면입니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>중첩 라우팅</h1>
      <nav aria-label="주요 메뉴">
        <Link to="/">홈</Link>
        <Link to="/community">커뮤니티</Link>
        <Link to="/community/new">글쓰기</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/community/new" element={<NewPostPage />} />
      </Routes>
      <p className="hint">
        TODO: 공통 레이아웃과 커뮤니티 레이아웃을 만들고 Outlet으로 자식 화면을
        표시하세요.
      </p>
    </div>
  );
}
