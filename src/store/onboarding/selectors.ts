import {RootState} from 'store/rootReducer';

export const selectOnboardingStep = (state: RootState) =>
  state.onboarding.currentOnboardingStep;

export const selectSplashScreen = (state: RootState) =>
  state.onboarding.isSplash;
