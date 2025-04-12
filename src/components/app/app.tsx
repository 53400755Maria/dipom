import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import FavoritePage from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../../components/private-route/private-route';
import { AuthorizationStatus, AppRoute, Setting } from '../../const';

function App(): React.JSX.Element {
  // В реальном приложении статус должен браться из состояния (Redux/Context)
  const currentAuthStatus = AuthorizationStatus.NoAuth; // Пример - пользователь не авторизован

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path={AppRoute.Main} 
          element={<MainPage flowerOffersCount={Setting.flowerOffersCount} />} 
        />
        
        <Route 
          path={AppRoute.Login} 
          element={<LoginPage />} 
        />
        
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={currentAuthStatus}>
              <FavoritePage fullOffersCount={Setting.fullOffersCount} />
            </PrivateRoute>
          }
        />
        
        <Route 
          path={AppRoute.Offer} 
          element={<OfferPage offersCount={Setting.offersCount} />} 
        />
        
        <Route 
          path="*" 
          element={<ErrorPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
