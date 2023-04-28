/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-invalid-regexp */
import { Box, Button, Flex, Grid, Stack, TextInput, Text } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'state/hooks';
import { stage, userAccountInfo } from 'state/onboardingSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface IPropsUserAccountInfo {
  pageTitle: string;
  submitButtonText: string;
  previousButton: boolean;
}
// eslint-disable-next-line prefer-regex-literals
const phoneNumberRegex = new RegExp(
  '^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$'
);
const UserPrivacyInfo = ({
  pageTitle,
  submitButtonText,
  previousButton,
}: IPropsUserAccountInfo) => {
  const userAccountDetailSchema = z.object({
    firstName: z.string().min(1, { message: 'Please enter first name' }),
    lastName: z.string().min(1, { message: 'Please enter last name' }),
    email: z.string().email({ message: 'Invalid email address' }),
    occupation: z.string().min(1, { message: 'Please enter your occupation' }),
    address: z.string().min(1, { message: 'Please enter home address' }),
    phoneNumber: z
      .string()
      .regex(phoneNumberRegex, { message: 'Phone number is Invalid' }),
  });
  const dispatch = useDispatch();
  // get Redux store values
  const currentStage = useAppSelector((state) => state.user.Stage);
  const userAccountDetail = useAppSelector(
    (state) => state.user.UserAccountInfoDetail
  );
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(userAccountDetailSchema),
    defaultValues: {
      firstName: userAccountDetail.firstName,
      lastName: userAccountDetail.lastName,
      email: userAccountDetail.email,
      occupation: userAccountDetail.occupation,
      address: userAccountDetail.address,
      phoneNumber: userAccountDetail.phoneNumber,
    },
  });
  const { errors } = formState;

  const onSubmit = handleSubmit(
    (data: {
      firstName: string;
      lastName: string;
      email: string;
      occupation: string;
      address: string;
      phoneNumber: string;
    }) => {
      dispatch(
        userAccountInfo({
          firstName: data.firstName,
          lastName: data.lastName,
          occupation: data.occupation,
          address: data.address,
          phoneNumber: data.phoneNumber,
          email: data.email,
        })
      );
      dispatch(stage(2));
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
              label="First name"
              {...register('firstName')}
              placeholder="First name"
              type="text"
              withAsterisk
              error={errors.firstName?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              label="Last Name"
              {...register('lastName')}
              placeholder="Last name"
              type="text"
              name="lastName"
              withAsterisk
              error={errors.lastName?.message as string}
            />
          </Grid.Col>
        </Grid>
        <Grid grow>
          <Grid.Col sm={6}>
            <TextInput
              label="Phone number"
              withAsterisk
              {...register('phoneNumber')}
              name="phoneNumber"
              placeholder="+234 81 8084 2573"
              // value={formData.lastName}
              error={errors.phoneNumber?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              label="Email"
              {...register('email')}
              placeholder="Email address"
              type="email"
              name="email"
              withAsterisk
              error={errors.email?.message as string}
            />
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col sm={8}>
            <TextInput
              label="Address"
              {...register('address')}
              placeholder="6, Akanni Lane Off, Isolo, Lagos"
              type="text"
              withAsterisk
              error={errors.address?.message as string}
            />
          </Grid.Col>
          <Grid.Col sm={4}>
            <TextInput
              label="Occupation"
              placeholder="Occupation"
              {...register('occupation')}
              name="occupation"
              type="text"
              withAsterisk
              error={errors.occupation?.message as string}
            />
          </Grid.Col>
        </Grid>
      </Stack>
      <Flex mt={20}>
        {previousButton && (
          <p>
            <Button
              type="submit"
              onClick={() => dispatch(stage(currentStage - 1))}
              sx={{ background: '#93278F', fontSize: 14 }}
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
