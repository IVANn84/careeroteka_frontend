/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory, useLocation } from 'react-router';
import React, { useEffect, useState } from 'react';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';
import ResetPasswordApi from 'Api/passwordRecovery';

interface Props {
  classes: { [className: string]: string };
}

export default function VerifyPassword({ classes }: Props) {
  const { state } = useLocation<{ email: string }>();
  const history = useHistory();
  const [intervalTimer, setIntervalTimer] = useState(null);
  const [timer, setTimer] = useState(30);
  const [isCanClick, setIsCanClick] = useState(true);

  useEffect(() => {
    if (!state?.email) {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendVerifyToPassword = async () => {
    if (!isCanClick) {
      return;
    }

    setIsCanClick(false);
    setTimer(30);
    void ResetPasswordApi.ResetPassword({
      email: state.email,
    });

    setIntervalTimer(
      setInterval(() => {
        setTimer(value => {
          if (value === 1) {
            setIsCanClick(true);
            clearInterval(intervalTimer);
            return value;
          }

          return value - 1;
        });
      }, 1000),
    );
  };

  useEffect(() => () => clearInterval(intervalTimer), [intervalTimer]);

  return (
    <div className={classes.container}>
      <Typography
        className={`${classes.row} ${classes.center}`}
        component="h1"
        variant="H1"
        variantMobile="H1"
      >
        Восстановление пароля
      </Typography>
      <Typography
        className={`${classes.description} ${classes.center}`}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Ссылка для сброса пароля была отправлена вам на почту!
        Проверьте папку спам, если вы не видите сообщение от нас.
      </Typography>
      <Typography
        className={`${classes.request} ${classes.center}`}
        component="p"
        variant="B2"
        variantMobile="B2"
      >
        Не получили сообщения?
        {' '}
        <span
          aria-disabled={!isCanClick}
          className={`${classes.link} ${
            !isCanClick ? classes.disabledLink : ''
          }`}
          onClick={sendVerifyToPassword}
          onKeyDown={onEnter(sendVerifyToPassword)}
          role="button"
          tabIndex={0}
        >
          Попробуйте повторить отправку
          {' '}
          {!isCanClick && ` через ${timer}`}
        </span>
      </Typography>
    </div>
  );
}
