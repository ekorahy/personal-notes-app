import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AppBar from './components/header/AppBar';
import ArchivedPage from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <footer className="text-center text-lg-start bg-light text-muted">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
