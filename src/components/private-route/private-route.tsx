import { Navigate, useLocation } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus, AuthorizationStatusType } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatusType;
}>;

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  const location = useLocation();

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} state={{ from: location }} replace />
  );
}

export default PrivateRoute;
