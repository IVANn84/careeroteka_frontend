import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import { PageSkeleton } from 'Component/Skeleton';
import { RootStoreType, UserType } from 'Component/Layout/stores/root';
import { useStoreLayoutComponent } from 'Component/Layout/stores';
import { useStoreInterceptersApi } from 'ApiDir/intercepters/stores';

import Header from '../components/Header';
import Footer from '../components/Footer';

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
  const device = useDevice();

  const { isLoading, isAuth, currentUser } = useStoreLayoutComponent();

  const { isRedirectToLogin, setIsRedirectToLogin } = useStoreInterceptersApi();

  // Если пользователя необходимо редиректнуть на страницу авторизации из декоратора апи
  useEffect(() => {
    if (isRedirectToLogin) {
      setIsRedirectToLogin(false);
      sessionStorage.setItem(
        'unauthorizedFromUrl',
        window.location.pathname + window.location.hash + window.location.search,
      );
      history.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRedirectToLogin]);

  if (!isAuth || (isAuth && !currentUser?.isEmailConfirmed)) {
    return (
      <div className={classes.containerAuth}>
        <Header variant={device === 'desktop' ? 'whitetitle' : 'blacktitle'} />
        <main className={classes.contentContainerAuth}>
          <div className={classes.content}>
            {device === 'desktop' && (
              <div className={classes.contentHeader}>
                <Typography component="h2" variant="H2" variantMobile="H2">
                  Добро пожаловать в&nbsp;Бруноям х&nbsp;Careeroteka!
                </Typography>
                <Typography
                  className={classes.contentText}
                  component="p"
                  variant="B1"
                  variantMobile="B1"
                >
                  Хотелось&nbsp;бы вам быстро находить вакансии с&nbsp;разных
                  платформ онлайн-рекрутинга, специально подобранные для вас?
                  Мы&nbsp;поможем!
                </Typography>
                <Typography component="p" variant="B1" variantMobile="B1">
                  Бруноям х&nbsp;Careeroteka&nbsp;&mdash; найдём подходящие
                  вакансии, чтобы вы&nbsp;не&nbsp;тратили на&nbsp;поиск время.
                </Typography>
              </div>
            )}
            <div className={classes.contentBody}>
              {typeof children === 'function'
                ? children({ isAuth, currentUser })
                : children}
            </div>
          </div>
          {device === 'mobile' && (
            <div className={classes.contentFooter}>
              <Typography
                className={classes.contentTitle}
                component="p"
                variant="H1"
                variantMobile="H1"
              >
                бруноям
              </Typography>
              <Typography component="p" variant="B1" variantMobile="B1">
                Энциклопедия о&nbsp;карьере с&nbsp;данными от&nbsp;реальных
                специалистов и&nbsp;экспертов
              </Typography>
            </div>
          )}
        </main>
        {device === 'mobile' && <Footer />}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.contentContainer}>
        <PageSkeleton isDisplayed={isLoading}>
          {typeof children === 'function'
            ? children({ isAuth, currentUser })
            : children}
        </PageSkeleton>
      </main>
      <Footer />
    </div>
  );
}
