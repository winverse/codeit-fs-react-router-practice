import { Link, NavLink, Outlet, Route, Routes } from 'react-router';

function SiteLayout() {
  return (
    <div className="app">
      <h1>중첩 라우팅</h1>
      <nav aria-label="주요 메뉴">
        <Link to="/">홈</Link>
        <Link to="/community">커뮤니티</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function CommunityLayout() {
  return (
    <section className="panel">
      <h2>커뮤니티</h2>
      <nav aria-label="커뮤니티 메뉴">
        <NavLink
          to="/community"
          end={true}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          게시글
        </NavLink>
        <NavLink
          to="/community/new"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          글쓰기
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
}

function HomePage() {
  return <p className="panel">홈 화면입니다.</p>;
}

function CommunityPage() {
  return <p>게시글 목록 화면입니다.</p>;
}

function NewPostPage() {
  return <p>새 게시글 작성 화면입니다.</p>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="community" element={<CommunityLayout />}>
          <Route index={true} element={<CommunityPage />} />
          <Route path="new" element={<NewPostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
