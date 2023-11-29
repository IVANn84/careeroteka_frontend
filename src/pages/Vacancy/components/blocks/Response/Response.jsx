import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Typography from 'Component/Typography';
import Button from 'Component/Button';
import Block from 'Component/Block';

export default function Response({
  classes,
}) {
  const [isShowContacts, setIsShowContacts] = React.useState(false);

  const {
    entityStore,
  } = useStoreVacancyPage();

  return (
    <Block
      className={classes.container}
      isSlim
    >
      <Typography
        component="h3"
        variant="H3"
        variantMobile="H3"
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
                    component="p"
                    variant="B1"
                    variantMobile="B2"
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
              isDisabled={entityStore.isLoading}
              mode="dark"
              onClick={() => setIsShowContacts(true)}
            >
              Показать контакты
            </Button>
          )
      }
    </Block>
  );
}
