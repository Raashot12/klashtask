/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-invalid-regexp */
import {
  Box,
  Button,
  Flex,
  Grid,
  Stack,
  TextInput,
  Text,
  Checkbox,
  PasswordInput,
} from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'state/hooks';
import { stage, userPrivacyInfo, userReviewInfo } from 'state/onboardingSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDisclosure } from '@mantine/hooks';
import { z } from 'zod';

interface IPropsUserPrivacyInfo {
  pageTitle: string;
  submitButtonText: string;
  previousButton: boolean;
}

const UserPrivacyInfo = ({
  pageTitle,
  submitButtonText,
  previousButton,
}: IPropsUserPrivacyInfo) => {
  const [visible, { toggle }] = useDisclosure(false);

  const userPrivacySchema = z
    .object({
      country: z.string().min(1, { message: 'Please enter country' }),
      state: z.string().min(1, { message: 'Please enter state' }),
      subScribeToNewLetter: z.literal(true, {
        errorMap: () => ({
          message: 'You must accept subscribe to newsletter',
        }),
      }),
      subScribeOtherProducts: z.literal(true, {
        errorMap: () => ({
          message: 'You must accept subscribe to other products',
        }),
      }),
      userPassword: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters'),
      userConfirmPassword: z
        .string()
        .min(1, 'Password confirmation is required'),
    })
    .refine((data) => data.userPassword === data.userConfirmPassword, {
      path: ['userConfirmPassword'],
      message: 'Passwords do not match',
    });

  // Getting data from the state
  const currentStage = useAppSelector((state) => state.user.Stage); // for previous button
  const userPrivacyDetail = useAppSelector(
    (state) => state.user.UserPrivacyInfoDetail
  );
  const userAccountInfo = useAppSelector(
    (state) => state.user.UserAccountInfoDetail
  );
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(userPrivacySchema),
    defaultValues: {
      userPassword: userPrivacyDetail.userPassword,
      userConfirmPassword: userPrivacyDetail.userConfirmPassword,
      country: userPrivacyDetail.country,
      state: userPrivacyDetail.state,
      subScribeToNewLetter: userPrivacyDetail.subScribeToNewLetter,
      subScribeOtherProducts: userPrivacyDetail.subScribeOtherProducts,
    },
  });
  const { errors } = formState;
  const dispatch = useDispatch();

  // Handle Submit function
  const onSubmit = handleSubmit(
    (data: {
      userPassword: string;
      userConfirmPassword: string;
      country: string;
      state: string;
      subScribeToNewLetter: boolean;
      subScribeOtherProducts: boolean;
    }) => {
      dispatch(
        userPrivacyInfo({
          userPassword: data.userPassword,
          userConfirmPassword: data.userConfirmPassword,
          country: data.country,
          state: data.state,
          subScribeToNewLetter: data.subScribeToNewLetter,
          subScribeOtherProducts: data.subScribeOtherProducts,
        })
      );
      dispatch(
        userReviewInfo({
          ...userAccountInfo,
          ...data,
        })
      );
      dispatch(
        stage(3) // update formStage
      );
    }
  );

  return (
    <Box component="form" mt={20} onSubmit={onSubmit}>
      <Stack spacing={18}>
        <Text fw={600} fz={15}>
          {pageTitle || 'Signup'}
        </Text>
        <Grid>
          <Grid.Col sm={6}>
            <TextInput
              label="Country"
              {...register('country')}
              placeholder="e.g Nigeria"
              type="text"
              withAsterisk
              error={errors.country?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              label="State"
              {...register('state')}
              placeholder="e.g Lagos"
              type="text"
              withAsterisk
              error={errors.state?.message as string}
            />
          </Grid.Col>
        </Grid>
        <Grid grow>
          <Grid.Col sm={6}>
            <PasswordInput
              label="Password"
              withAsterisk
              {...register('userPassword')}
              placeholder="Password"
              visible={visible}
              onVisibilityChange={toggle}
              error={errors.userPassword?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <PasswordInput
              label="Confirm password"
              {...register('userConfirmPassword')}
              placeholder="Confirm password"
              withAsterisk
              visible={visible}
              onVisibilityChange={toggle}
              error={errors.userConfirmPassword?.message as string}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col sm={6}>
            <Checkbox
              label="Recieve updates about Julieth AI product by email"
              labelPosition="right"
              radius={3}
              {...register('subScribeToNewLetter')}
              error={errors.subScribeToNewLetter?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <Checkbox
              label="Recieve communication by email for other products created by the Julieth AI team"
              labelPosition="right"
              radius={3}
              {...register('subScribeOtherProducts')}
              error={errors.subScribeOtherProducts?.message as string}
            />
          </Grid.Col>
        </Grid>
      </Stack>
      <Flex mt={20} columnGap={40}>
        {previousButton && (
          <p>
            <Button
              type="submit"
              onClick={() => dispatch(stage(currentStage - 1))}
              sx={{ background: '#93278F', fontSize: 14 }}
              mah={38}
            >
              Back
            </Button>
          </p>
        )}
        <p>
          <Button
            type="submit"
            sx={{ background: '#93278F', fontSize: 14 }}
            mah={38}
          >
            {submitButtonText || ''}
          </Button>
        </p>
      </Flex>
    </Box>
  );
};

export default UserPrivacyInfo;
