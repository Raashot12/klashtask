import TransactionDashboard from '@/components/Dashboard/TransactionDashboard';
import KlashaDashboardWrapper from '@/components/layouts/KlashaDashboardWrapper';
import { Box } from '@mantine/core';
import Head from 'next/head';
import React from 'react';

const TransactionPage = () => {
  return (
    <KlashaDashboardWrapper>
      <Head>
        <title>Klasha | Transactions</title>
        <meta name="description" content="Klasha dashboard" />
      </Head>
      <Box mt={{ base: 88, md: 168 }} fw={600}>
        <TransactionDashboard />
      </Box>
    </KlashaDashboardWrapper>
  );
};

export default TransactionPage;
