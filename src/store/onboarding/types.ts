export interface OnboardingState {
  currentOnboardingStep: OnboardingViewState | null;
  isSplash: boolean;
}
export enum OnboardingViewState {
  splash = 'splash',
  signUp = 'signUp',
  login = 'login',
  startKyc = 'StartKyc',
}
