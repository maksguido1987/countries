import styled from 'styled-components';
import React from 'react';
import { Layout } from './layout';

export const Main = ({ children }) => {
  return (
    <PageWrapper>
      <Layout>{children}</Layout>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;
