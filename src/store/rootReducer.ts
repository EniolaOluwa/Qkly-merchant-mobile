import {combineReducers, Reducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {reduxStorage} from './storage';
import {userSlice} from './userSlice/userSlice';
import {onboardingSlice} from './onboarding/onboardingSlice';
import {UserState} from 'user-slice-module';
import {OnboardingState} from './onboarding/types';

const userPersistConfig = {
  key: 'user',
  storage: reduxStorage,
  whitelist: ['user'],
  stateReconciler: hardSet,
};

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: reduxStorage,
  whitelist: ['currentOnboardingStep'],
  stateReconciler: hardSet,
};

const appReducer = combineReducers({
  user: persistReducer<UserState>(userPersistConfig, userSlice.reducer),
  onboarding: persistReducer<OnboardingState>(
    onboardingPersistConfig,
    onboardingSlice.reducer,
  ),
});

export type RootState = ReturnType<typeof appReducer>;

export const rootReducer: Reducer<RootState> = (state, action) => {
  return appReducer(state, action);
};
