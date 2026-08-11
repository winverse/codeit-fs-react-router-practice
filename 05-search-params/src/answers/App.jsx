import { Route, Routes, useSearchParams } from 'react-router';

const products = [
  { id: 1, name: '키보드', price: 89000 },
  { id: 2, name: '마우스', price: 45000 },
  { id: 3, name: '모니터', price: 320000 },
  { id: 4, name: '마우스 패드', price: 18000 },
];

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const order = searchParams.get('order') ?? '';

  const results = products
    .filter((product) => product.name.includes(query))
    .sort((first, second) => {
      if (order === 'asc') {
        return first.price - second.price;
      }

      if (order === 'desc') {
        return second.price - first.price;
      }

      return 0;
    });

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextQuery = String(formData.get('query')).trim();
    const nextParams = new URLSearchParams(searchParams);

    if (nextQuery) {
      nextParams.set('query', nextQuery);
    } else {
      nextParams.delete('query');
    }

    setSearchParams(nextParams);
  };

  const handleOrderChange = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    const nextOrder = event.target.value;

    if (nextOrder) {
      nextParams.set('order', nextOrder);
    } else {
      nextParams.delete('order');
    }

    setSearchParams(nextParams);
  };

  return (
    <section className="panel">
      <h2>상품 검색</h2>
      <form onSubmit={handleSearch}>
        <input
          aria-label="검색어"
          defaultValue={query}
          name="query"
          placeholder="상품 이름"
        />
        <button type="submit">검색</button>
        <select aria-label="정렬" onChange={handleOrderChange} value={order}>
          <option value="">기본 순서</option>
          <option value="asc">낮은 가격순</option>
          <option value="desc">높은 가격순</option>
        </select>
      </form>
      <ul className="card-list">
        {results.map((product) => (
          <li className="card" key={product.id}>
            {product.name} · {product.price.toLocaleString()}원
          </li>
        ))}
      </ul>
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
