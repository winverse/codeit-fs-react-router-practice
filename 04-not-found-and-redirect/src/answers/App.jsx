import { Link, Navigate, Route, Routes } from 'react-router';
import { HomePage } from './pages/Home';
import { NotFoundPage } from './pages/NotFound';
import { ProfilePage } from './pages/Profile';

export function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/old-home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}
