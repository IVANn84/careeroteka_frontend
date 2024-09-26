import { useHistory } from 'react-router-dom';
import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import { useStoreLayoutComponent } from 'Component/Layout/stores';

export default function RightHeaderNavigation({ classes }) {
  const history = useHistory();
  const redirectToLogin = useRedirectToLogin();
  const { isAuth, logout } = useStoreLayoutComponent();
  const device = useDevice();

  const gotoLogin = () => {
    redirectToLogin(true);
  };

  const gotoRegister = () => {
    history.push('/signup');
  };

  const onLogout = () => {
    logout(() => history.push('/'));
  };

  return isAuth ? (
    <div className={classes.container}>
      <Typography
        onClick={onLogout}
        onKeyDown={onEnter(onLogout)}
        tabIndex={0}
        variant="B1"
        variantMobile="B2"
      >
        Выйти
      </Typography>
    </div>
  ) : (
    <div className={classes.right}>
      <div className={classes.container}>
        <Typography
          onClick={gotoLogin}
          onKeyDown={onEnter(gotoLogin)}
          tabIndex={0}
          variant="B1"
          variantMobile="B2"
        >
          Войти
        </Typography>
      </div>
      {['desktop', 'tablet'].includes(device) && (
        <div className={classes.container}>
          <Typography
            onClick={gotoRegister}
            onKeyDown={onEnter(gotoRegister)}
            tabIndex={0}
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
          >
            Создать аккаунт
          </Typography>
        </div>
      )}
    </div>
  );
}
