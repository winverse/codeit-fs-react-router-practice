import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductsHomePage } from './pages/ProductsHomePage';
import { ProductsPage } from './pages/ProductsPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route index element={<ProductsHomePage />} />
          <Route path="category" element={<CategoryPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
