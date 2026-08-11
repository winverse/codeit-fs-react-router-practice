import { Link, Route, Routes, useLocation, useNavigate } from 'react-router';

function HistoryControls() {
  const navigate = useNavigate();

  return (
    <div className="controls" aria-label="방문 기록 이동">
      <button type="button" onClick={() => navigate(-1)}>
        뒤로
      </button>
      <button type="button" onClick={() => navigate(1)}>
        앞으로
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <section className="panel">
      <h2>홈</h2>
      <Link to="/login">로그인하기</Link>
    </section>
  );
}

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard', {
      replace: true,
      state: { message: '로그인되었습니다.' },
    });
  };

  return (
    <section className="panel">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="이름"
          name="name"
          placeholder="이름"
          required={true}
        />
        <button type="submit">로그인</button>
      </form>
    </section>
  );
}

function DashboardPage() {
  const location = useLocation();

  return (
    <section className="panel">
      <h2>대시보드</h2>
      <p>{location.state?.message ?? '로그인 후 이동한 화면입니다.'}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>프로그래밍 방식으로 이동하기</h1>
      <HistoryControls />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}
