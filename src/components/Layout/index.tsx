import React, { useEffect } from 'react';

import { useStoreLayoutComponent } from 'Component/Layout/stores';

import DefaultLayout from './components/DefaultLayout/styles';

type Props = React.ComponentProps<typeof DefaultLayout>;

function Layout(props: Props) {
  const {
    reset,
    fetchCurrentUser,
  } = useStoreLayoutComponent();

  useEffect(() => {
    void fetchCurrentUser();

    return reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout {...props} />
  );
}

export default Layout;
