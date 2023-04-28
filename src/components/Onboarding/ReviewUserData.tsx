/* eslint-disable no-void */
import React, { useState } from 'react';
import { Button, Flex, Group, Loader, Stack, Text } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { stage, userAccountInfo, userPrivacyInfo } from 'state/onboardingSlice';
import { useAppSelector } from 'state/hooks';
import { IconEdit, IconScan } from '@tabler/icons';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useRouter } from 'next/router';

interface IPropsReviewInfo {
  pageTitle: string;
  submitButtonText: string;
  previousButton: boolean;
}

const ReviewUserData = ({
  pageTitle,
  submitButtonText,
  previousButton,
}: IPropsReviewInfo) => {
  const [loading, setIsloading] = useState(false);

  // Getting data from the state
  const currentStage = useAppSelector((state) => state.user.Stage);

  const userAccountDetail: {
    firstName?: string;
    lastName?: string;
    address?: string;
    occupation?: string;
    country?: string;
    state?: string;
    subScribeToNewLetter?: string;
    subScribeOtherProducts?: string;
    userPassword?: string;
    userConfirmPassword?: string;
  } = useAppSelector((state) => state.user.ReviewDetails);

  const dispatch = useDispatch();

  const router = useRouter();

  async function handleSubmitOnboardingForm() {
    try {
      setIsloading(true);
      const response = await axios.post('/api/onboarding', userAccountDetail);
      setIsloading(false);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: response.data?.message,
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(
        stage(1) // update formStage
      );
      dispatch(
        userAccountInfo({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          address: '',
          occupation: '',
          email: '',
        })
      );
      dispatch(
        userPrivacyInfo({
          userPassword: '',
          userConfirmPassword: '',
          country: '',
          state: '',
          subScribeToNewLetter: false,
          subScribeOtherProducts: false,
        })
      );
      router.push('/');
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      setIsloading(false);
    }
  }

  return (
    <div>
      <Text fw={600} fz={15}>
        {pageTitle || 'Signup'}
      </Text>
      <Flex justify={'space-between'} align={'center'} mt={30}>
        <Group spacing={5}>
          <Text component="span" fw={600} fz={16}>
            User detail
          </Text>
          <IconScan size={20} />:
        </Group>
        <Flex
          align={'center'}
          columnGap={10}
          sx={{ cursor: 'pointer' }}
          onClick={() => dispatch(stage(1))}
        >
          <Text fw={600} fz={16}>
            Edit{' '}
          </Text>
          <IconEdit color="#051438" size={20} />
        </Flex>
      </Flex>
      <Stack spacing={10} mt={16}>
        <Text fw={500}>{userAccountDetail?.firstName}</Text>
        <Text fw={500}>{userAccountDetail?.lastName}</Text>
        <Text fw={500}>{userAccountDetail?.occupation}</Text>
        <Text fw={500}>{userAccountDetail?.address}</Text>
      </Stack>
      <Flex justify={'space-between'} align={'center'} mt={30}>
        <Group spacing={5}>
          <Text component="span" fw={600} fz={16}>
            Privacy detail
          </Text>
          <IconScan size={20} />:
        </Group>
        <Flex
          align={'center'}
          columnGap={10}
          sx={{ cursor: 'pointer' }}
          onClick={() => dispatch(stage(2))}
        >
          <Text fw={600} fz={16}>
            Edit{' '}
          </Text>
          <IconEdit color="#051438" size={20} />
        </Flex>
      </Flex>
      <Stack spacing={10} mt={16}>
        <Text fw={500}>{userAccountDetail?.country}</Text>
        <Text fw={500}>{userAccountDetail?.state}</Text>
        <Text fw={500}>
          Subscribe to newsletter:{' '}
          {userAccountDetail?.subScribeToNewLetter ? 'Yes' : 'No'}
        </Text>
        <Text fw={500}>
          Subscribe to new products:{' '}
          {userAccountDetail?.subScribeOtherProducts ? 'Yes' : 'No'}
        </Text>
      </Stack>
      <Flex mt={20} columnGap={40}>
        {previousButton && (
          <p>
            <Button
              type="submit"
              onClick={() => dispatch(stage(currentStage - 1))}
              sx={{
                background: '#93278F',
                fontSize: 14,
                pointerEvents: loading ? 'none' : 'auto',
              }}
              mah={38}
            >
              Back
            </Button>
          </p>
        )}
        <p>
          <Button
            type="submit"
            onClick={handleSubmitOnboardingForm}
            sx={{
              background: '#93278F',
              fontSize: 14,
              pointerEvents: loading ? 'none' : 'auto',
            }}
            mah={38}
          >
            {loading ? '' : `${submitButtonText}`}
            {loading && <Loader variant="dots" color="grape" />}
          </Button>
        </p>
      </Flex>
    </div>
  );
};

export default ReviewUserData;
