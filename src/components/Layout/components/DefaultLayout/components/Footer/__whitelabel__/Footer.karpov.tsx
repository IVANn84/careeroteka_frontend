import { NavLink } from 'react-router-dom';
import React from 'react';
import moment from 'moment';

import Typography from 'Component/Typography';
import Icon from 'Component/Icon';
import ExternalLink from 'Component/ExternalLink';

export default function Footer({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.footer}>
        <div className={classes.footerLogo}>
          <span className={classes.footerTitle}>karpov courses</span>
          <div className={classes.footerLinksDesktop}>
            <ExternalLink href="https://vk.com">
              <Icon height={32} name="vk" width={32} />
            </ExternalLink>
            <ExternalLink href="https://vk.com">
              <Icon height={32} name="telegram" width={32} />
            </ExternalLink>
          </div>
        </div>
        <Typography variant="B1" variantMobile="B2">
          <NavLink to="/bug">Нашли ошибку?</NavLink>
        </Typography>
        <div className={classes.footerLinksMobile}>
          <ExternalLink href="https://vk.com">
            <Icon name="vk" />
          </ExternalLink>
          <ExternalLink href="https://telegram.com">
            <Icon name="telegram" />
          </ExternalLink>
        </div>
        <div className={classes.copyrightMobile}>
          <Typography component="div" variant="B1" variantMobile="B2">
            ©
            {' '}
            {moment().year()}
          </Typography>
        </div>
      </div>
      <div className={classes.copyrightDesktop}>
        <Typography variant="B1" variantMobile="B2">
          ©
          {' '}
          {moment().year()}
        </Typography>
      </div>
    </div>
  );
}
