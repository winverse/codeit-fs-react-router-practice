import { Link, useParams } from 'react-router';
import { products } from '../../data/products';
import styles from './ProductDetailPage.module.css';

export function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className={styles.error}>
        <p>상품을 찾을 수 없습니다.</p>
        <Link to="/products">상품 목록으로</Link>
      </div>
    );
  }

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
