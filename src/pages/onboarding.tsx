import { Box, Container, Flex, Text } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons';
import ProgressBar from 'components/Onboarding/ProgressBar';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useAppSelector } from 'state/hooks';
import UserAccountInfo from 'components/Onboarding/UserAccountInfo';
import UserPrivacyInfo from 'components/Onboarding/UserPrivacyInfo';
import ReviewUserData from 'components/Onboarding/ReviewUserData';

const getProgress = (param: number) => {
  if (param === 1) return 33.33;
  if (param === 2) return 66.66;
  if (param === 3) return 100;
  return 0;
};
const OnboardingPage = () => {
  const pageStage = useAppSelector((state) => state.user.Stage);

  return (
    <div>
      <Head>
        <title>Julieth AI | onboarding</title>
      </Head>
      <Container size={'xl'}>
        <Flex py={20} align={'center'} columnGap={25}>
          <Link href={'/'}>
            <IconArrowBack />
          </Link>
          <Box component="article">
            <Text fz={18} fw={500} lh={'1.5'}>
              Welcome!
            </Text>
            <Text fz={18} fw={300}>
              Register to get started
            </Text>
          </Box>
        </Flex>
        <ProgressBar progressPercent={getProgress(pageStage)} />
        <Container size={'md'}>
          <Box component="section">
            {pageStage === 1 && (
              <LazyLoad once>
                <div>
                  <UserAccountInfo
                    pageTitle={'User Form:'}
                    submitButtonText={'Next'}
                    previousButton={false}
                  />
                </div>
              </LazyLoad>
            )}
            {pageStage === 2 && (
              <LazyLoad once>
                <div>
                  <UserPrivacyInfo
                    pageTitle={'Privacy Form:'}
                    submitButtonText={'Next'}
                    previousButton={true}
                  />
                </div>
              </LazyLoad>
            )}
            {pageStage === 3 && (
              <LazyLoad once>
                <div>
                  <ReviewUserData
                    pageTitle={'Review Form:'}
                    submitButtonText={'Submit'}
                    previousButton={true}
                  />
                </div>
              </LazyLoad>
            )}
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default OnboardingPage;
