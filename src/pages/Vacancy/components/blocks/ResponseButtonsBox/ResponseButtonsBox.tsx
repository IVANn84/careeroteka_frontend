import React from 'react';
import hh from 'Image/hh.png';
import habr from 'Image/habr.png';

import Modal from 'Component/Modal';
import ArowTopRght from 'Component/Icon/icons/ArowTopRght';
import ExternalLink from 'Component/ExternalLink';
import Button from 'Component/Button';

export default function ResponseButtonsBox({ classes, isDisplay, onDecline }) {
  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
    >
      <Modal.Header className={classes.header} onDecline={onDecline} />
      <Modal.Content className={classes.content}>
        <ExternalLink href="https://spb.rabota.ru/">
          <Button
            className={classes.buttonResponse}
            mode="secondary"
            variant="outlined"
          >
            rabota.ru
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

        <Button
          className={classes.buttonResponse}
          mode="dark"
          variant="filled"
        >
          <div className={classes.contentInner}>
            Напрямую рекрутеру
            <ArowTopRght />
          </div>
        </Button>

      </Modal.Content>
    </Modal.Modal>
  );
}
