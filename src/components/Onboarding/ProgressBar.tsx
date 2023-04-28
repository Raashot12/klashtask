/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@emotion/styled';
import { Text, Box } from '@mantine/core';

const ProgressBarGrandContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
  color: #93278f;
  width: 80%;
  display: block;
  margin: 0 auto;
`;
const BorderColorProgress = styled.div`
  border-radius: 2px;
  font-family: 'General Sans';
  position: relative;
  width: 100%;
  display: block;
  margin: 0 auto;
  height: 9px;
  border: 1px solid #a6afc2;
`;
const StepContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const BackgroundColorProgress = styled.div<{ progressPercent?: number }>`
  background-color: #93278f;
  width: ${({ progressPercent }) => `${progressPercent}%`};
  border-radius: 2px;
  position: absolute;
  transition: all 3s ease-in-out;
  left: 0px;
  top: 0px;
  height: 100%;
`;

const BoxCustom = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  top: -20px;
`;
const NumberBoxOne = styled.div`
  width: 32px;
  height: 32px;
  background: #93278f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  border-radius: 50%;
`;
const NumberBoxTwo = styled.div<{ progressPercent?: number }>`
  width: 32px;
  height: 32px;
  background: ${({ progressPercent }) =>
    progressPercent && progressPercent < 50 ? '#EDF0F8' : '#93278F'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  color: ${({ progressPercent }) =>
    progressPercent && progressPercent >= 50 ? '#ffff' : '#93278F'};
  border-radius: 50%;
  border: 1px solid #93278f;
`;
const NumberBoxThree = styled.div<{ progressPercent?: number }>`
  width: 32px;
  height: 32px;
  background: ${({ progressPercent }) =>
    progressPercent && progressPercent >= 100 ? '#93278F' : '#EDF0F8'};
  display: flex;
  align-items: center;
  transition: all 3s ease-in-out;
  justify-content: center;
  color: ${({ progressPercent }) =>
    progressPercent && progressPercent >= 100 ? '#FFFFFF' : '#93278F'};
  border-radius: 50%;
  border: 1px solid #93278f;
`;

const TextProgress = styled(Text as any)`
  position: relative;
  top: -10px;
  font-family: 'General Sans';
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0.02em;
  &:last-of-type {
    right: -10px;
  }
  &:first-of-type {
    left: -10px;
  }
`;

const ProgressBar = ({
  progressPercent = 25,
}: {
  progressPercent?: number;
}) => {
  return (
    <Box mt={30}>
      <ProgressBarGrandContainer>
        <BorderColorProgress>
          <BackgroundColorProgress
            progressPercent={progressPercent}
          ></BackgroundColorProgress>
        </BorderColorProgress>
        <StepContainer>
          <BoxCustom>
            <NumberBoxOne>1</NumberBoxOne>
          </BoxCustom>
          <BoxCustom>
            <NumberBoxTwo progressPercent={progressPercent}>2</NumberBoxTwo>
          </BoxCustom>
          <BoxCustom>
            <NumberBoxThree progressPercent={progressPercent}>3</NumberBoxThree>
          </BoxCustom>
        </StepContainer>
        <StepContainer>
          <TextProgress fw={500} fz={{ base: 14, sm: 16 }}>
            Account
          </TextProgress>
          <TextProgress fw={500} fz={{ base: 14, sm: 16 }}>
            Privacy{' '}
          </TextProgress>
          <TextProgress fw={500} fz={{ base: 14, sm: 16 }}>
            Review
          </TextProgress>
        </StepContainer>
      </ProgressBarGrandContainer>
    </Box>
  );
};

export default ProgressBar;
