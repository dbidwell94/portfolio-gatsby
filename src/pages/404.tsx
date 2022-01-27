import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function NotFound() {
  return (
    <Layout>
      <Sidebar />
      <NotFoundContainer>
        <h2>This page is either not found or under construction.</h2>
      </NotFoundContainer>
    </Layout>
  );
}
