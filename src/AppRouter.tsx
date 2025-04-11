import { Navigate } from 'react-router-dom';
import { ProtectedRoute } from './AppProtectedRoute ';
import Login from './views/login/Login';
import Home from './views/home/Home';
import Onboard from './views/onboard/Onboard';

export class AppRouterName {
  public static readonly home = '/trang-chinh';
  public static readonly noMatch = '*';
  public static readonly login = '/dang-nhap';
  public static readonly onboard = '/onboard';
}

export const AppRouter = [
  {
    path: AppRouterName.noMatch,
    element: <Navigate to={AppRouterName.onboard} replace />,
  },
  {
    path: AppRouterName.home,
    element:
      <ProtectedRoute>
        <Home></Home>
      </ProtectedRoute>,
  },
  {
    path: AppRouterName.login,
    element: <Login />,
  },
  {
    path: AppRouterName.onboard,
    element: <Onboard />
  }
];