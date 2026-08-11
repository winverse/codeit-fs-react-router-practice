import { Link, Route, Routes, useParams } from 'react-router';

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
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PostDetailPage() {
  const { postId } = useParams();
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return (
      <section className="panel">
        <h2>게시글을 찾을 수 없습니다.</h2>
        <Link to="/posts">목록으로</Link>
      </section>
    );
  }

  return (
    <article className="panel">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">목록으로</Link>
    </article>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>동적 라우팅</h1>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}
