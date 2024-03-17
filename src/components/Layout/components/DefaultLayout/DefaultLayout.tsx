import { useHistory, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import { PageSkeleton } from 'Component/Skeleton';
import { RootStoreType, UserType } from 'Component/Layout/stores/root';
import { useStoreLayoutComponent } from 'Component/Layout/stores';
import { useStoreInterceptersApi } from 'ApiDir/intercepters/stores';

import Header from './components/Header';
import Footer from './components/Footer';

interface Props {
  children: (
    ({ isAuth, currentUser }: { isAuth: RootStoreType['isAuth'], currentUser: UserType }
  ) => React.ReactNode) |React.ReactNode;
  classes: {[className: string]: string};
}

export default function DefaultLayout({
  children,

  classes,
}: Props) {
  const history = useHistory();
  const location = useLocation();

  const {
    isLoading,
    isAuth,
    currentUser,
  } = useStoreLayoutComponent();

  const {
    isRedirectToLogin,
    setIsRedirectToLogin,
  } = useStoreInterceptersApi();

  // Если пользователя необходимо редиректнуть на страницу авторизации из декоратора апи
  useEffect(() => {
    if (isRedirectToLogin) {
      setIsRedirectToLogin(false);
      sessionStorage.setItem('unauthorizedFromUrl', window.location.pathname + window.location.hash + window.location.search);
      history.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRedirectToLogin]);

  // Пока пользователь не заполнил онбоардинг, никуда нет доступа
  useEffect(() => {
    if (isAuth
      && !currentUser?.isOnboardingDone
      && !['/onboarding', '/verify-email'].includes(location.pathname)) {
      history.push('/onboarding');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, currentUser, location]);

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.contentContainer}>
        <PageSkeleton isDisplayed={isLoading}>
          {
            typeof children === 'function'
              ? children({ isAuth, currentUser })
              : children
          }
        </PageSkeleton>
      </main>
      <Footer />
    </div>
  );
}
