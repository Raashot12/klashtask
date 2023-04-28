import React, { useRef } from 'react';
import { createStyles } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import styled from '@emotion/styled';
import PlateauMedMainLogo from 'components/IconComponents/PlateauMedMainLogo';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const useCarouselStlyes = createStyles(() => ({
  root: {
    backgroundColor: '#677597',
    flex: 1,
    color: 'white',
  },
  indicator: {
    width: 8,
    height: 8,
    transition: 'width 250ms ease',
    '&[data-active]': {
      width: 16,
    },
  },
}));

const AuthPageContainer = styled.div`
  display: flex;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: column;
  }
`;

const CarouselSlideContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: column;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: none;
  }
`;

const CarouselSlideTitle = styled.h2``;

const CarouselSlideDescription = styled.p`
  margin-bottom: 2rem;
`;

const AuthContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #edf0f8;
  min-height: 100vh;
  flex: 1;
`;

const AuthPlateauMedLogo = styled.div`
  max-width: 160px;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { classes } = useCarouselStlyes();
  return (
    <AuthPageContainer>
      <Carousel
        classNames={{ root: classes.root, indicator: classes.indicator }}
        mx="auto"
        withIndicators
        withControls={false}
        loop
        plugins={[autoplay.current]}
        slideSize="100%"
      >
        <Carousel.Slide>
          <CarouselSlideContent>
            <CarouselSlideTitle>
              Keep easy track of hospital administrative data
            </CarouselSlideTitle>
            <CarouselSlideDescription>
              Healthcare system and records’ management made efficient,
              seamless, and portable
            </CarouselSlideDescription>
          </CarouselSlideContent>
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselSlideContent>
            <CarouselSlideTitle>
              Record and access pharmacy and lab activities
            </CarouselSlideTitle>
            <CarouselSlideDescription>
              Healthcare system and records’ management made efficient,
              seamless, and portable
            </CarouselSlideDescription>
          </CarouselSlideContent>
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselSlideContent>
            <CarouselSlideTitle>
              Organize staff and manage accurate clinical records
            </CarouselSlideTitle>
            <CarouselSlideDescription>
              Healthcare system and records’ management made efficient,
              seamless, and portable
            </CarouselSlideDescription>
          </CarouselSlideContent>
        </Carousel.Slide>
      </Carousel>
      <AuthContent>{children}</AuthContent>
      <AuthPlateauMedLogo>
        <PlateauMedMainLogo width={160} />
      </AuthPlateauMedLogo>
    </AuthPageContainer>
  );
};

export default AuthLayout;
