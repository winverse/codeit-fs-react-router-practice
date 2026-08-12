// TODO 1: 이 주석 바로 아래에서 react-router의 useSearchParams를 import하세요.
import { products } from '@/data/products';
import styles from './Search.module.css';

export function SearchPage() {
  // TODO 2: 이 주석 바로 아래에서 useSearchParams를 호출해 searchParams와 setSearchParams를 가져오세요.

  // TODO 3: 바로 아래 두 placeholder를 URL의 'search'와 'orderBy' 파라미터 값으로 교체하세요.
  // HINT: searchParams.get()을 사용합니다.
  const searchTerm = null; // 'search' 파라미터
  const orderBy = null; // 'orderBy' 파라미터

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO 4: 이 주석 위치에서 form의 'search' input 값을 가져와 search 파라미터를 업데이트하세요.
    // HINT: formData로 검색어를 구하고, new URLSearchParams(searchParams)로 복사한 뒤 search만 set 또는 delete하세요.
    // 마지막에 setSearchParams(nextParams)를 호출합니다.
  };

  const handleSort = (sortType) => {
    // TODO 5: 바로 아래 placeholder 한 줄을 기존 'search'는 유지하고 'orderBy'를 sortType으로 업데이트하는 코드로 교체하세요.
    void sortType;
  };

  // TODO 6: 바로 아래 products 할당을 searchTerm 필터와 orderBy 정렬 결과로 교체하세요.
  const searchedProducts = products; // 이 변수에 최종 결과를 할당하세요.

  return (
    <div className={styles.page}>
      <h2>상품 검색</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="search"
          name="search"
          defaultValue={searchTerm || ''}
          placeholder="상품 이름을 검색하세요..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          검색
        </button>
      </form>

      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => handleSort('price-asc')}
          disabled={orderBy === 'price-asc'}
        >
          가격 오름차순
        </button>
        <button
          onClick={() => handleSort('price-desc')}
          disabled={orderBy === 'price-desc'}
        >
          가격 내림차순
        </button>
      </div>

      <hr />

      <h3>검색 결과</h3>
      {/* TODO 7: 바로 아래 ul 전체를 검색 전·결과 없음·결과 있음 조건부 UI로 교체하세요. */}
      <ul>
        {searchedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()}원
          </li>
        ))}
      </ul>
    </div>
  );
}
