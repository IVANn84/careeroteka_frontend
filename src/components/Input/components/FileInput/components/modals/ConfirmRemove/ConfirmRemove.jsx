import React from 'react';

import Modal from 'Component/Modal';
import Typography from 'Component/Typography';
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
          variant="outlined"
          mode="dark"
          onClick={onDecline}
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
