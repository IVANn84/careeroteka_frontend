import React, { useEffect } from 'react';

import { useStoreLayoutComponent } from 'Component/Layout/stores';
import DefaultLayout from './components/DefaultLayout';

function Layout(props) {
  const {
    reset,
    fetchCurrentUser,
  } = useStoreLayoutComponent();

  useEffect(() => {
    fetchCurrentUser();

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout {...props} />
  );
}

export default Layout;
