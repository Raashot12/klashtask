import KlashaLogo from '@/components/IconComponents/KlashaLogo';
import { Button, Center, Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

const HomePage = () => {
  const router = useRouter();
  return (
    <Center mt={100}>
      <Flex direction={'column'} gap={20}>
        <KlashaLogo full />
        <Button bg={'#EF2C5A'} onClick={() => router.push('/dashboard')}>
          See dashboard
        </Button>
      </Flex>
    </Center>
  );
};
export default HomePage;
