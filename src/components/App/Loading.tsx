import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { useBoolState } from '../helpers';

const Wrapper = styled.div`
  position: absolute;
  top: 72px;
  z-index: 1200;

  width: 100%;
  @media (min-width: 410px) {
    width: 410px;
  }
`;

export const Loading = () => {
  const [loading, start, stop] = useBoolState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', stop);
    Router.events.on('routeChangeError', stop);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', stop);
      Router.events.off('routeChangeError', stop);
    };
  }, []);

  return <Wrapper>{loading && <LinearProgress />}</Wrapper>;
};
