import React from 'react';
import rabota from 'Image/rabota.png';
import hh from 'Image/hh.png';
import habr from 'Image/habr.png';

import { useModal } from 'Hook/useModal';
import Typography from 'Component/Typography';
import Modal from 'Component/Modal';
import ArowTopRght from 'Component/Icon/icons/ArowTopRght';
import ExternalLink from 'Component/ExternalLink';
import Button from 'Component/Button';

import UnauthorizedBox from './UnauthorizedBox';

export default function ResponseButtonsBox({ classes, isDisplay, onDecline }) {
  const { isOpen, open, close } = useModal();
  return (
    <>
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
            Отклик
          </Typography>
          <Typography
            variant="B1"
            variantMobile="B2"
            weightMobile="regular"
            width="regular"
          >
            Оставьте свой отклик на вакансию на одном
            <br />
            из этих каналов:
          </Typography>
          <ExternalLink href="https://spb.rabota.ru/">
            <Button
              className={classes.buttonResponse}
              mode="secondary"
              variant="outlined"
            >
              <div className={classes.contentInner}>
                <img alt="hh" height={34} src={rabota} />
                rabota.ru
              </div>
            </Button>
          </ExternalLink>

          <ExternalLink href="https://career.habr.com/">
            <Button
              className={classes.buttonResponse}
              mode="secondary"
              variant="outlined"
            >
              <div className={classes.contentInner}>
                <img alt="hh" src={habr} />
                habr.com
              </div>
            </Button>
          </ExternalLink>

          <ExternalLink href="https://spb.hh.ru/">
            <Button
              className={classes.buttonResponse}
              mode="secondary"
              variant="outlined"
            >
              <div className={classes.contentInner}>
                <img alt="hh" src={hh} />
                hh.ru
              </div>
            </Button>
          </ExternalLink>
          <Typography
            className={classes.link}
            variant="B1"
            variantMobile="B2"
            weightMobile="regular"
            width="regular"
          >
            Показать еще 4 канала.
          </Typography>
          <Button
            className={classes.buttonResponse}
            mode="dark"
            onClick={open}
            variant="filled"
          >
            <div className={classes.contentInner}>
              Напрямую рекрутеру
              <ArowTopRght />
            </div>
          </Button>
        </Modal.Content>
      </Modal.Modal>
      <UnauthorizedBox
        isDisplay={isOpen}
        onConfirm={close}
        onDecline={close}
      />
    </>
  );
}
