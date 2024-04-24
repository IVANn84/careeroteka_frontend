import React, { useEffect, useState } from 'react';

import { onEnter } from 'Util/onEnter';
import Typography from 'Component/Typography';
import EmailApi from 'Api/email';

export default function VerifyEmail({
  classes,
}) {
  const [intervalTimer, setIntervalTimer] = useState(null);
  const [timer, setTimer] = useState(30);
  const [isCanClick, setIsCanClick] = useState(true);

  const sendVerifyToEmail = async () => {
    if (!isCanClick) {
      return;
    }

    setIsCanClick(false);
    setTimer(30);
    void EmailApi.SendConfirmation();

    setIntervalTimer(setInterval(() => {
      setTimer(value => {
        if (value === 1) {
          setIsCanClick(true);
          clearInterval(intervalTimer);
          return value;
        }

        return value - 1;
      });
    }, 1000));
  };

  useEffect(() => {
    void sendVerifyToEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        variant="B1"
        variantMobile="B2"
      >
        Мы почти закончили! Пожалуйста, перейдите во входящие сообщения на почте,
        для подтверждения email адреса. Проверьте папку спам, если не видите сообщения от нас.
      </Typography>
      <Typography
        className={`${classes.row} ${classes.center}`}
        variant="B2"
        variantMobile="B2"
      >
        Не получили сообщения?
        {' '}
        <span
          aria-disabled={!isCanClick}
          className={`${classes.link} ${!isCanClick ? classes.disabledLink : ''}`}
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
      <Typography
        className={classes.center}
        variant="B2"
        variantMobile="B2"
      >
        Ничего не пришло? Напишите нам support@careeroteka.com
      </Typography>
    </div>
  );
}
