/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory } from 'react-router';
import React, { useEffect } from 'react';

import { onEnter } from 'Util/onEnter';
import { useStorePasswordRecovery } from 'Page/PasswordRecovery/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Button from 'Component/Button';

export default function PasswordRecovery({
  classes,
}) {
  const history = useHistory();

  const {
    recovery,
    reset,
    entityStore,
    fieldsStore,
  } = useStorePasswordRecovery();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => reset, []);

  const redirectAfterRecovery = () => history.push('/verify-password', { email: fieldsStore.email });
  const gotoSignup = () => history.push('/signup');

  const onRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    recovery(redirectAfterRecovery);
  };

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        component="h1"
        variant="H1"
        variantMobile="H4"
      >
        Восстановление пароля
      </Typography>
      <form className={classes.inputs} onSubmit={onRecovery}>
        <Input
          error={entityStore.errors.email}
          onChange={fieldsStore.setEmail}
          placeholder="Введите e-mail"
          type="text"
          value={fieldsStore.email}
        />
        <Button
          className={classes.button}
          isDisabled={entityStore.isLoading || !fieldsStore.email}
          mode="primary"
          type="submit"
        >
          Восстановить пароль
        </Button>
      </form>
      <div className={classes.links}>
        <Typography
          component="p"
          variant="B2"
          variantMobile="B2"
        >
          Еще нет аккаунта?
          {' '}
          <span
            className={classes.link}
            onClick={gotoSignup}
            onKeyDown={onEnter(gotoSignup)}
          >
            Зарегистрируйтесь
          </span>
        </Typography>
      </div>
    </div>
  );
}
