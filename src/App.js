import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AppBar from './components/header/AppBar';
import AddNotePage from './pages/AddNotePage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './pages/Error404';
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import NotesPageWrapper from './pages/NotesPage';

function App() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main style={{marginTop: "90px"}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menus" element={<MenusPage />} />
          <Route path="/notes" element={<NotesPageWrapper />} />
          <Route path="/archived" element={<ArchivedPageWrapper />} />
          <Route path="notes/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddNotePage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className="text-center text-lg-start bg-light text-muted" style={{marginBottom: "0"}}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
