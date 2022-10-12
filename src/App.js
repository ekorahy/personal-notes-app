import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import AppBar from './components/header/AppBar';
import AddNotePage from './pages/AddNotePage';
import ArchivedPageWrapper from './pages/ArchivedPage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './pages/Error404';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenusPage from './pages/MenusPage';
import NotesPageWrapper from './pages/NotesPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ThemeProvider } from './contexts/ThemeContext';
import AppBarUserAuthentication from './components/header/AppBarUserAuthentication';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: 'dark',
      toggleTheme: () => {
        this.setState((prevState) => {
          return {
            theme: prevState.theme === 'dark' ? 'white' : 'dark'
          }
        })
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      }
    })
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      }
    })
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }
  
  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div className={`bg-${this.state.theme === 'white' ? 'dark' : 'white'}`}>
            <header>
              <AppBarUserAuthentication />
            </header>
            <main className='d-flex aligns-items-center justify-content-center mt-5' style={{paddingTop: "75px"}}>
                <Routes>
                  <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                  <Route path='/register' element={<RegisterPage />} />
                </Routes>
            </main>
          </div>
        </ThemeProvider>
      )
    }
    return (
      <ThemeProvider value={this.state}>
        <div className={`bg-${this.state.theme === 'dark' ? 'white' : 'dark'} `}>
          <header>
            <AppBar logout={this.onLogout} name={this.state.authedUser.name} />
          </header>
          <main style={{paddingTop: "90px"}} className={`bg-${this.state.theme === 'dark' ? 'white' : 'dark'}`}>
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
          <footer className={`text-center text-lg-start bg-${this.state.theme === 'dark' ? 'light' : 'dark'} text-muted mb-0`}>
            <Footer />
          </footer>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
