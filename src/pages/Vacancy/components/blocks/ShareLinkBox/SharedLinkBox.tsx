import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Modal from 'Component/Modal';
import Icon from 'Component/Icon';
import ExternalLink from 'Component/ExternalLink';
import Button from 'Component/Button';

const copyTextToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    throw new Error('Something went wrong');
  }
};

export default function SharedLinkBox({ classes, isDisplay, onDecline }) {
  const { entityStore } = useStoreVacancyPage();
  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
    >
      <Modal.Header className={classes.header} onDecline={onDecline} />
      <Modal.Content className={classes.content}>
        <Button
          className={classes.buttonResponse}
          onClick={() => copyTextToClipboard(entityStore.entity?.link)}
        >
          Скопировать ссылку
        </Button>

        <ExternalLink href="https://web.whatsapp.com/">
          <Button className={classes.buttonResponse}>
            <div className={classes.contentInner}>
              <Icon height={24} name="whatsapp" width={24} />
              WhatsApp
            </div>
          </Button>
        </ExternalLink>

        <ExternalLink href="https://web.telegram.org">
          <Button className={classes.buttonResponse}>
            <div className={classes.contentInner}>
              <Icon height={24} name="telegram" width={24} />
              Telegram
            </div>
          </Button>
        </ExternalLink>

        <ExternalLink href="https://vk.com">
          <Button className={classes.buttonResponse}>
            <div className={classes.contentInner}>
              <Icon height={24} name="vk" width={24} />
              ВКонтате
            </div>
          </Button>
        </ExternalLink>
      </Modal.Content>
    </Modal.Modal>
  );
}
