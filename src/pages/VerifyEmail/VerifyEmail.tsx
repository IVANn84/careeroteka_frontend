import { useHistory, useLocation } from 'react-router';
import React, { useEffect, useState } from 'react';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';
import EmailApi from 'Api/email';

interface Props {
  classes: { [className: string]: string };
}

export default function VerifyEmail({ classes }: Props) {
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

  const sendVerifyToEmail = async () => {
    if (!isCanClick) {
      return;
    }

    setIsCanClick(false);
    setTimer(30);
    void EmailApi.EmailResend({
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
        Подтвердите свою почту
      </Typography>
      <Typography
        className={`${classes.description} ${classes.center}`}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Мы&nbsp;почти закончили! Пожалуйста, перейдите во&nbsp;входящие
        сообщения на&nbsp;почте, для подтверждения email адреса. Проверьте папку
        спам, если не&nbsp;видите сообщения от&nbsp;нас.
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
          onClick={sendVerifyToEmail}
          onKeyDown={onEnter(sendVerifyToEmail)}
          role="button"
          tabIndex={0}
        >
          Попробуйте повторить отправку
          {' '}
          {!isCanClick && ` через ${timer}`}
        </span>
      </Typography>
      <Typography className={classes.center} component="p" variant="B2" variantMobile="B2">
        Ничего не пришло? Напишите нам support@careeroteka.com
      </Typography>
    </div>
  );
}
