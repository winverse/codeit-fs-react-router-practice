import { Link, Outlet } from 'react-router';
import styles from './ProductsPage.module.css';

export function ProductsPage() {
  return (
    <div className={styles.page}>
      <h2>Products</h2>
      <nav className={styles.nav}>
        <Link to="/products">상품 홈</Link>
        <Link to="/products/category">카테고리</Link>
      </nav>
      <hr />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
