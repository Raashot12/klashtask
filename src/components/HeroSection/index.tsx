import { Button, Flex, Grid, Image, Text } from '@mantine/core';
import Animation from 'components/Shared/Animation/AnimationWrapper';
import { IconArrowForward } from '@tabler/icons';
import React from 'react';
import { useRouter } from 'next/router';

const HeroSection = () => {
  const router = useRouter();
  const handleOnboardingRoute = () => {
    router.push('/onboarding');
  };
  return (
    <Grid sx={{ alignItems: 'center' }} py={{ base: 40, sm: 30, md: 15 }}>
      <Grid.Col md={6}>
        <Flex align={'center'}>
          <Animation
            direction="right"
            width="auto"
            duration={'1.2s'}
            minScreenWidth="960px"
            animate={false}
            minScreenStyle={{
              animate: true,
            }}
          >
            <div>
              <Text
                fw={700}
                fz={{ base: 35, sm: 40, md: 50, lg: 65 }}
                lh={'1.2'}
                color="#93278F"
                mb={{ base: 30, sm: 40 }}
              >
                We Collect <br></br>
                High Quality Leads
              </Text>
              <Text sx={{ base: 14, sm: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravi.
              </Text>
              <Button
                mah={38}
                sx={{ backgroundColor: '#93278F', borderRadius: 12 }}
                mt={30}
                rightIcon={<IconArrowForward />}
                onClick={handleOnboardingRoute}
              >
                Click to Onboard
              </Button>
            </div>
          </Animation>
        </Flex>
      </Grid.Col>
      <Grid.Col md={6}>
        <Animation
          direction="left"
          width="auto"
          duration={'1.2s'}
          minScreenWidth="960px"
          animate={false}
          minScreenStyle={{
            animate: true,
          }}
        >
          <Image
            src={
              'https://preview.colorlib.com/theme/seos/assets/img/hero/hero_right.png.webp'
            }
            alt="hero section image"
            sx={{
              img: {
                maxWidth: '584px',
                maxHeight: '607px',
                margin: '0 auto',
              },
            }}
          />
        </Animation>
      </Grid.Col>
    </Grid>
  );
};

export default HeroSection;
