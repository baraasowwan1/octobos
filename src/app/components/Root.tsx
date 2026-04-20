import { Outlet } from 'react-router';
import { LanguageProvider } from '../context/LanguageContext';

export function Root() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}
