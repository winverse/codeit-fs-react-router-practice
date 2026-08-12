import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
// TODO: ProductsPage import 하세요
// TODO: ProductsHomePage를 import 하세요
// TODO: CategoryPage를 import 하세요

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<HomePage />} />
        {/* TODO 1: 바로 아래 부모 Route의 path=""를 "products"로, element={null}을 <ProductsPage />로 교체하세요. */}
        <Route path="" element={null}>
          {/* TODO 2: 이 부모 Route 안에 ProductsHomePage index Route를 추가하세요. */}
          {/* TODO 3: TODO 2 바로 뒤에 CategoryPage의 category 자식 Route를 추가하세요. */}
        </Route>
      </Route>
    </Routes>
  );
}
