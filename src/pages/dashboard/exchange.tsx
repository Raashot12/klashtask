import KlashaDashboardWrapper from '@/components/layouts/KlashaDashboardWrapper';
import { Box } from '@mantine/core';
import Head from 'next/head';
import React from 'react';

const ExchangePage = () => {
  return (
    <KlashaDashboardWrapper>
      <Head>
        <title>Klasha | Exchange rate</title>
        <meta name="description" content="Klasha dashboard" />
      </Head>
      <Box mt={168} fw={600}>
        Coming Soon!
      </Box>
    </KlashaDashboardWrapper>
  );
};

export default ExchangePage;
