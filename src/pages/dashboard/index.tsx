/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Container, Flex } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/router';
import KlashaDashboardWrapper from '@/components/layouts/KlashaDashboardWrapper';
import LandingDashboard from '@/components/Dashboard/LandingDashboard';

function Home() {
  const mobileScreen = useMediaQuery('(max-width: 576px)');
  const router = useRouter();
  const handleOnboardingRoute = () => {
    router.push('/onboarding');
  };
  return (
    <KlashaDashboardWrapper>
      <Head>
        <title>Klasha | Dashboard</title>
        <meta name="description" content="Klasha dashboard" />
      </Head>
      <LandingDashboard />
    </KlashaDashboardWrapper>
  );
}
export default Home;
