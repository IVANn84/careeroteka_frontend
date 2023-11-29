import React from 'react';

import Typography from 'Component/Typography';
import Modal from 'Component/Modal';
import Button from 'Component/Button';

export default function ConfirmRemove({
  isDisplayed,

  onDecline,
  onConfirm,
}) {
  return (
    <Modal.Modal
      isDisplayed={isDisplayed}
      onClose={onDecline}
    >
      <Modal.Content>
        <Typography
          variant="B1"
          variantMobile="B2"
          weight="semiBold"
          weightMobile="semiBold"
        >
          Вы действительно хотите удалить этот документ?
        </Typography>
      </Modal.Content>
      <Modal.Footer>
        <Button
          mode="dark"
          onClick={onDecline}
          variant="outlined"
        >
          Отменить
        </Button>
        <Button
          mode="dark"
          onClick={onConfirm}
        >
          Удалить
        </Button>
      </Modal.Footer>
    </Modal.Modal>
  );
}
