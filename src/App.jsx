import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppContextProvider from './context/Context';

import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Branch from './pages/Branch';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/index';
import Schedule from './pages/Schedule';
import NotFound from './pages/NotFound';
import Payments from './pages/Payments';
import Messages from './pages/Messages';
import MenuPage from './pages/MenuPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <I18nextProvider i18={i18n}>
        <BrowserRouter>
          <AppContextProvider>
            <Header />
            <main className="mt-[54px] sm:mt-[82px] mb-[66px] sm:mb-0 min-page-height bg-gray-100">
              <ToastContainer />

              <Routes>
                <Route path={'/'} element={<Navigate to={'/home'} />} />
                <Route path={'/home'} element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/branch'} element={<Branch />} />
                <Route element={<PrivateRoute />}>
                  <Route path={'/profile'} element={<Profile />} />
                  <Route path={'/blog'} element={<Blog />} />
                  <Route path={'/schedule'} element={<Schedule />} />
                  <Route path={'/payments'} element={<Payments />} />
                  <Route path={'/messages'} element={<Messages />} />
                  <Route path={'/menu'} element={<MenuPage />} />
                </Route>
                <Route path={'*'} component={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </AppContextProvider>
        </BrowserRouter>
      </I18nextProvider>
    </>
  );
}

export default App;
