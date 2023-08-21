import React from 'react';
import { useHistory } from 'react-router-dom';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import Typography from 'Component/Typography';
import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import { onEnter } from 'Util/onEnter';

export default function RightHeaderNavigation({
  classes,
}) {
  const history = useHistory();
  const redirectToLogin = useRedirectToLogin();

  const {
    isAuth,
    logout,
  } = useStoreLayoutComponent();

  const gotoLogin = () => {
    redirectToLogin(true);
  };

  const onLogout = () => {
    logout(() => history.push('/'));
  };

  return isAuth
    ? (
      <div className={classes.container}>
        <Typography
          variant="B1"
          variantMobile="B2"
          tabIndex={0}
          onKeyDown={onEnter(onLogout)}
          onClick={onLogout}
        >
          Выйти
        </Typography>
      </div>
    )
    : (
      <div className={classes.container}>
        <Typography
          variant="B1"
          variantMobile="B2"
          tabIndex={0}
          onKeyDown={onEnter(gotoLogin)}
          onClick={gotoLogin}
        >
          Войти
        </Typography>
      </div>
    );
}
