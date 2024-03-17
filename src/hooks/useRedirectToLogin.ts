import { useHistory } from 'react-router-dom';

// Создание функции для сохранения текущего пути и редиректа на логин
export function useRedirectToLogin() {
  const history = useHistory();

  return function (isSetUnauthorizedFromUrl) {
    if (isSetUnauthorizedFromUrl) {
      sessionStorage.setItem('unauthorizedFromUrl', window.location.pathname + window.location.hash + window.location.search);
    } else {
      sessionStorage.removeItem('unauthorizedFromUrl');
    }

    history.push('/login');
  };
}
