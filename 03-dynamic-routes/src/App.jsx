import { Link, Route, Routes } from 'react-router';

const posts = [
  { id: '1', title: 'React Router 시작하기', body: '첫 번째 게시글입니다.' },
  { id: '2', title: '동적 라우팅 이해하기', body: '두 번째 게시글입니다.' },
  { id: '3', title: 'URL 파라미터 읽기', body: '세 번째 게시글입니다.' },
];

function PostListPage() {
  return (
    <section className="panel">
      <h2>게시글</h2>
      <ul className="card-list">
        {posts.map((post) => (
          <li className="card" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <p className="hint">TODO: 각 게시글을 상세 URL로 연결하세요.</p>
    </section>
  );
}

function PostDetailPage() {
  return (
    <section className="panel">
      <h2>게시글 상세</h2>
      <p className="hint">
        TODO: useParams로 postId를 읽고 일치하는 게시글을 표시하세요.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>동적 라우팅 실습</h1>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts" element={<PostListPage />} />
        {/* TODO: /posts/:postId 경로를 PostDetailPage에 연결하세요. */}
      </Routes>
    </div>
  );
}
