import { useHistory } from 'react-router-dom';
import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useRedirectToLogin } from 'Hook/useRedirectToLogin';
import Typography from 'Component/Typography';
import { useStoreLayoutComponent } from 'Component/Layout/stores';

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
          onClick={onLogout}
          onKeyDown={onEnter(onLogout)}
          tabIndex={0}
          variant="B1"
          variantMobile="B2"
        >
          Выйти
        </Typography>
      </div>
    )
    : (
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
    );
}
