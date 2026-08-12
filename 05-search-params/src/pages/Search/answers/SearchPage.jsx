import { useSearchParams } from 'react-router';
import { products } from '@/data/products';
import styles from './Search.module.css';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') ?? '';
  const orderBy = searchParams.get('orderBy') ?? '';

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextSearchTerm = formData.get('search').trim();
    const nextParams = new URLSearchParams(searchParams);

    if (nextSearchTerm) {
      nextParams.set('search', nextSearchTerm);
    } else {
      nextParams.delete('search');
    }

    setSearchParams(nextParams);
  }

  function handleSort(sortType) {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('orderBy', sortType);
    setSearchParams(nextParams);
  }

  const searchedProducts = products
    .filter((product) => product.name.includes(searchTerm))
    .toSorted((a, b) => {
      if (orderBy === 'price-asc') return a.price - b.price;
      if (orderBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className={styles.page}>
      <h2>상품 검색</h2>
      <form onSubmit={handleSubmit}>
        <input
          key={searchTerm}
          type="search"
          name="search"
          defaultValue={searchTerm}
          placeholder="상품 이름을 검색하세요..."
        />
        <button type="submit">검색</button>
      </form>

      <div>
        <button
          type="button"
          onClick={() => handleSort('price-asc')}
          disabled={orderBy === 'price-asc'}
        >
          가격 오름차순
        </button>
        <button
          type="button"
          onClick={() => handleSort('price-desc')}
          disabled={orderBy === 'price-desc'}
        >
          가격 내림차순
        </button>
      </div>

      <hr />
      <h3>검색 결과</h3>
      {!searchTerm ? (
        <p>검색어를 입력하여 상품을 찾아보세요.</p>
      ) : searchedProducts.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        <ul>
          {searchedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price.toLocaleString()}원
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
