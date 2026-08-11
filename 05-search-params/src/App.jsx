import { Route, Routes } from 'react-router';

const products = [
  { id: 1, name: '키보드', price: 89000 },
  { id: 2, name: '마우스', price: 45000 },
  { id: 3, name: '모니터', price: 320000 },
  { id: 4, name: '마우스 패드', price: 18000 },
];

function SearchPage() {
  return (
    <section className="panel">
      <h2>상품 검색</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <input aria-label="검색어" name="query" placeholder="상품 이름" />
        <button type="submit">검색</button>
        <select aria-label="정렬" defaultValue="">
          <option value="">기본 순서</option>
          <option value="asc">낮은 가격순</option>
          <option value="desc">높은 가격순</option>
        </select>
      </form>
      <ul className="card-list">
        {products.map((product) => (
          <li className="card" key={product.id}>
            {product.name} · {product.price.toLocaleString()}원
          </li>
        ))}
      </ul>
      <p className="hint">
        TODO: 이벤트에서 search params를 갱신하고, query로 필터링하며 order가
        asc 또는 desc일 때만 정렬하세요.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>검색 파라미터</h1>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
