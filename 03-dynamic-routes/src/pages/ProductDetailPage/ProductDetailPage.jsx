import { Link } from 'react-router';
// TODO 1: 이 주석 바로 아래에서 react-router의 useParams를 import하세요.
// TODO 2: TODO 1 import 바로 아래에서 ../../data/products의 products를 import하세요.
import styles from './ProductDetailPage.module.css';

export function ProductDetailPage() {
  // TODO 3: 아래 placeholder product 객체 전체를 useParams 호출과 products.find 결과로 교체하세요.
  // 교체 범위는 다음 const product = { 부터 닫는 }; 까지입니다.
  const product = {
    name: '상품 상세 구현 전',
    price: 0,
    description: '위 TODO를 구현하여 URL에 맞는 상품을 표시하세요.',
  };

  // TODO 4: product가 없으면 이 주석 바로 아래에서 "상품을 찾을 수 없습니다" 안내를 먼저 반환하세요.
  // HINT: if (condition) {}

  return (
    <div className={styles.page}>
      <Link to="/products" className={styles.backLink}>
        ← 상품 목록으로
      </Link>
      <div className={styles.productCard}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>
          가격: {product.price.toLocaleString()}원
        </p>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
    </div>
  );
}
