import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Block from 'Component/Block';
import Typography from 'Component/Typography';
import Button from 'Component/Button';
import ExternalLink from 'Component/ExternalLink';

export default function Response({
  classes,
}) {
  const [isShowUrls, setIsShowUrls] = React.useState(false);
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
      {
        isShowUrls
          ? (
            <div className={classes.urls}>
              <div>
                <Typography
                  variant="B1"
                  variantMobile="B1"
                  weight="semiBold"
                  weightMobile="semiBold"
                >
                  Смотрите эти вакансии на:
                </Typography>
                <XMarkIcon onClick={() => setIsShowUrls(false)} />
              </div>
              {entityStore.entity?.urls.map(({ name, url, icon }) => (
                <ExternalLink
                  key={name}
                  to={url}
                >
                  <img src={icon} alt="" />
                  <Typography
                    variant="B1"
                    variantMobile="B2"
                  >
                    {name}
                  </Typography>
                </ExternalLink>
              ))}
            </div>
          )
          : (
            <Button
              isDisabled={entityStore.isLoading}
              onClick={() => setIsShowUrls(true)}
            >
              Перейти к вакансии
            </Button>
          )
      }
      {
        isShowContacts
          ? (
            <div className={classes.contacts}>
              <div>
                <Typography
                  variant="B1"
                  variantMobile="B1"
                  weight="semiBold"
                  weightMobile="semiBold"
                >
                  {entityStore.entity?.contacts.name}
                </Typography>
                <XMarkIcon onClick={() => setIsShowContacts(false)} />
              </div>
              {entityStore.entity?.contacts.values.map(({ name, contact }) => (
                <Typography
                  key={name}
                  variant="B1"
                  variantMobile="B2"
                  component="p"
                >
                  {name}
                  :
                  {' '}
                  <span className={classes.contactValue}>
                    {contact}
                  </span>
                </Typography>
              ))}
            </div>
          )
          : (
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
