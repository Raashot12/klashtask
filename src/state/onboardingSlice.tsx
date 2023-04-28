import { createSlice } from '@reduxjs/toolkit';

// Slice
const onboardingSlice = createSlice({
  name: 'onboarding data',
  initialState: {
    Stage: 1, // default page stage to show on page load
    UserAccountInfoDetail: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      occupation: '',
      email: '',
    },
    UserPrivacyInfoDetail: {
      userPassword: '',
      userConfirmPassword: '',
      country: '',
      state: '',
      subScribeToNewLetter: false,
      subScribeOtherProducts: false,
    },
    ReviewDetails: {},
  },

  reducers: {
    stage: (state, action) => {
      state.Stage = action.payload;
    },
    userAccountInfo: (state, action) => {
      state.UserAccountInfoDetail = action.payload;
    },
    userPrivacyInfo: (state, action) => {
      state.UserPrivacyInfoDetail = action.payload;
    },
    userReviewInfo: (state, action) => {
      state.ReviewDetails = action.payload;
    },
  },
});

// Actions
export const { stage, userAccountInfo, userPrivacyInfo, userReviewInfo } =
  onboardingSlice.actions;
export default onboardingSlice;
