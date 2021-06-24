import React from 'react';
import Screen from '@components/common/Screen';
import BannerAdList from './BannerAdList';
import CategoryList from './CategoryList';
import PopularList from './PopularList';
import TryAgainList from './TryAgainList';
import { login, logout, UserDispatchType, UserStateType, useUserDispatch, useUserState } from 'src/contexts/UserContext';
import { useEffect } from 'react';

const HomeTab = () => {
  const {isLogin}: UserStateType = useUserState();
  const userDispatch: UserDispatchType = useUserDispatch();
  useEffect(
    () => {
      userDispatch(login());
      // userDispatch(logout());
    },
    []
  );
  return (
    <Screen>
      <BannerAdList />
      <CategoryList />
      <PopularList />
      {isLogin && <TryAgainList />}
    </Screen>
  )
};

export default HomeTab;
