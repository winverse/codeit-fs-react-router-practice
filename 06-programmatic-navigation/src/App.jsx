import { Link, Route, Routes } from 'react-router';

function HomePage() {
  return (
    <section className="panel">
      <h2>홈</h2>
      <Link to="/login">로그인하기</Link>
    </section>
  );
}

function LoginPage() {
  return (
    <section className="panel">
      <h2>로그인</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input aria-label="이름" name="name" placeholder="이름" required />
        <button type="submit">로그인</button>
      </form>
      <p className="hint">
        TODO: 제출하면 useNavigate로 /dashboard에 이동하세요.
      </p>
    </section>
  );
}

function DashboardPage() {
  return (
    <section className="panel">
      <h2>대시보드</h2>
      <p>로그인 후 이동할 화면입니다.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>프로그래밍 방식으로 이동하기 실습</h1>
      <p className="hint">
        TODO: navigate(-1)은 뒤로, navigate(1)은 앞으로 이동하는 버튼을
        만드세요.
      </p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}
