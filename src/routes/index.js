import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// Rendring Routes

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoutes]);
}
