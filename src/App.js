import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AppBar from "./components/header/AppBar";
import AddNotePage from "./pages/AddNotePage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./pages/Error404";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import LocaleContext from "./contexts/LocaleContext";
import AppBarUserAuthentication from "./components/header/AppBarUserAuthentication";
import NotesPage from "./pages/NotesPage";
import ArchivedPage from "./pages/ArchivedPage";
import Swal from "sweetalert2";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "dark");
  const [language, setLanguage] = React.useState(localStorage.getItem("language") || "en");

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === "dark" ? "white" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    })
  }

  const toggleLanguage = () => {
    setLanguage((prevState) => {
      const newLanguage = prevState === "en" ? "id" : "en";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    })
  };

  const localeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
      language,
      toggleLanguage
    }
  }, [theme, language]);

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    })
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        setAuthedUser(null);
        putAccessToken("");
        Swal.fire(
          "Log out!",
          "You have successfully logged out.",
          "success"
        )
      }
    })
    
  }

  return (
    <>
      {(() => {
        if (initializing) {
          return null;
        }

        if (authedUser === null) {
          return (
            <LocaleContext.Provider value={localeContextValue}>
              <div className={`bg-${localeContextValue.theme === "white" ? "dark" : "white"}`}>
                <header>
                  <AppBarUserAuthentication />
                </header>
                <main className="d-flex aligns-items-center justify-content-center mt-5">
                  <Routes>
                    <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                    <Route path="/register" element={<RegisterPage />} />
                  </Routes>
                </main>
              </div>
            </LocaleContext.Provider>
          )
        }
    
        return (
          <LocaleContext.Provider value={localeContextValue}>
            <div className={`bg-${localeContextValue.theme === "dark" ? "white" : "dark"} `}>
              <header>
                <AppBar logout={onLogout} name={authedUser.name} />
              </header>
              <main style={{paddingTop: "90px"}} className={`bg-${localeContextValue.theme === "dark" ? "white" : "dark"}`}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/notes" element={<NotesPage />} />
                  <Route path="/archived" element={<ArchivedPage />} />
                  <Route path="notes/:id" element={<DetailPage />} />
                  <Route path="/add" element={<AddNotePage />} />
                  <Route path="/*" element={<PageNotFound />} />
                </Routes>
              </main>
              <footer className={`text-center text-lg-start bg-${localeContextValue.theme === "dark" ? "light" : "dark"} text-muted mb-0`}>
                <Footer />
              </footer>
            </div>
          </LocaleContext.Provider>
        )
      })()}
    </>
  );
}

export default App;

