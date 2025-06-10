import {CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OnboardingState, OnboardingViewState} from './types';

export const initialOnboardingState: OnboardingState = {
  isSplash: false,
  currentOnboardingStep: OnboardingViewState.splash,
};

const setIsSplashAction: CaseReducer<OnboardingState> = state => ({
  ...state,
  isSplash: true,
});

const setOnboardingStepAction: CaseReducer<
  OnboardingState,
  PayloadAction<OnboardingViewState>
> = (state, {payload}) => ({
  ...state,
  currentOnboardingStep: payload,
});
export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: initialOnboardingState,
  reducers: {
    setIsSplash: setIsSplashAction,
    setOnboardingStep: setOnboardingStepAction,
  },
});

export const {setIsSplash, setOnboardingStep} = onboardingSlice.actions;
