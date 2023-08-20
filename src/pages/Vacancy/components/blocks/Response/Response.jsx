import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Block from 'Component/Block';
import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Response({
  classes,
}) {
  const [isShowContacts, setIsShowContacts] = React.useState(false);

  const {
    entityStore,
  } = useStoreVacancyPage();

  return (
    <Block
      isSlim
      className={classes.container}
    >
      <Typography
        variant="H3"
        variantMobile="H3"
        component="h3"
      >
        Отклик
      </Typography>
      <Button
        isDisabled={entityStore.isLoading}
        onClick={() => window.open(entityStore.entity?.link, '_blank')}
      >
        Перейти к вакансии
      </Button>
      {
        isShowContacts
          ? (
            <div className={classes.contacts}>
              <div>
                <XMarkIcon onClick={() => setIsShowContacts(false)} />
              </div>
              {entityStore.entity?.contacts.map(({ name, type, data }) => (
                <React.Fragment key={type}>
                  <Typography
                    variant="B1"
                    variantMobile="B1"
                    weight="semiBold"
                    weightMobile="semiBold"
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="B1"
                    variantMobile="B2"
                    component="p"
                  >
                    {type}
                    :
                    {' '}
                    <span className={classes.contactValue}>
                      {data}
                    </span>
                  </Typography>
                </React.Fragment>
              ))}
            </div>
          )
          : !!entityStore.entity?.contacts.length && (
            <Button
              mode="dark"
              isDisabled={entityStore.isLoading}
              onClick={() => setIsShowContacts(true)}
            >
              Показать контакты
            </Button>
          )
      }
    </Block>
  );
}
