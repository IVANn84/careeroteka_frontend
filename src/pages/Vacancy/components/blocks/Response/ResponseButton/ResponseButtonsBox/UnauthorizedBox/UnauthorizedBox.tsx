import { useHistory } from 'react-router';
import React, { useEffect } from 'react';

// import { onEnter } from 'Util/onEnter';
import { useStoreLoginPage } from 'Page/Login/stores';
import { useModal } from 'Hook/useModal';
import Typography from 'Component/Typography';
import Modal from 'Component/Modal';
import Input from 'Component/Input';
import ChevronLeft from 'Component/Icon/icons/ChevronLeft';
import Button from 'Component/Button';

export default function UnauthorizedBox({ classes, isDisplay, onDecline }) {
  const { close } = useModal();

  const history = useHistory();
  const {
    login,
    reset,
    entityStore,
    fieldsStore,
  } = useStoreLoginPage();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => reset, []);

  // Если пользователь авторизовался, то редиректим на прошлую страницу или на главную
  const redirectAfterLogin = () => {
    const unauthorizedFromUrl = sessionStorage.getItem('unauthorizedFromUrl');

    if (unauthorizedFromUrl) {
      sessionStorage.removeItem('unauthorizedFromUrl');
      history.push(unauthorizedFromUrl);
    } else {
      history.push('/');
    }
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(redirectAfterLogin);
  };

  const gotoRecovery = () => history.push('/password-recovery');
  // const gotoRegistration = () => history.push('/signup');

  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
    >
      <Modal.Header className={classes.header} onDecline={onDecline} />
      <Modal.Content className={classes.content}>
        <Typography
          variant="B1"
          variantMobile="B2"
          weightMobile="bold"
          width="bold"
        >
          Войдите, чтобы открыть контакты
        </Typography>
        <Typography
          className={classes.description}
          variant="B1"
          variantMobile="B2"
          weightMobile="regular"
          width="regular"
        >
          Покажем контакты рекрутера, чтобы откликнуться
          <br />
          напрямую и увеличить шанс трудоустройства
        </Typography>
        <form className={classes.inputs} onSubmit={onLogin}>
          <Input
            error={entityStore.errors.email}
            onChange={fieldsStore.setEmail}
            placeholder="Введите e-mail"
            type="text"
            value={fieldsStore.email}
          />
          <Input
            error={entityStore.errors.password}
            onChange={fieldsStore.setPassword}
            placeholder="Введите пароль"
            type="password"
            value={fieldsStore.password}
          />
          <Button
            className={classes.buttonResponse}
            isDisabled={entityStore.isLoading || !fieldsStore.email || !fieldsStore.password}
            mode="primary"
            type="submit"
          >
            Продолжить
          </Button>
        </form>
        {/* <form className={classes.inputs} onSubmit={onLogin}>
          <Input
            error={entityStore.errors.email}
            onChange={fieldsStore.setEmail}
            placeholder="Введите e-mail"
            type="text"
            value={fieldsStore.email}
          />
          <Input
            error={entityStore.errors.password}
            onChange={fieldsStore.setPassword}
            placeholder="Введите пароль"
            type="password"
            value={fieldsStore.password}
          />
          <Button
            className={classes.button}
            isDisabled={entityStore.isLoading || !fieldsStore.email || !fieldsStore.password}
            mode="primary"
            type="submit"
          >
            Продолжить
          </Button>
        </form> */}
        <Typography
          className={classes.link}
          component="p"
          onClick={gotoRecovery}
          tabIndex={0}
          variant="B2"
          variantMobile="B2"
        >
          Нет аккаунта
          {' '}
          <span
            className={classes.link}
          >
            или
          </span>
          {' '}
          забыли пароль?
        </Typography>
        <div className={classes.contentInner}>
          <ChevronLeft />
          <span
            onClick={onDecline}
            onKeyDown={close}
            role="button"
            tabIndex={0}
          >
            Назад
          </span>
        </div>
      </Modal.Content>
    </Modal.Modal>
  );
}
