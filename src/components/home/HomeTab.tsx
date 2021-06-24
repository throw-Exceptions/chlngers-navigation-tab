import React from 'react';
import Screen from '@components/common/Screen';
import BannerAdList from './BannerAdList';
import CategoryList from './CategoryList';
import PopularList from './PopularList';
import TryAgainList from './TryAgainList';

const HomeTab = () => {
  return (
    <Screen>
      <BannerAdList />
      <CategoryList />
      <PopularList />
      <TryAgainList />
    </Screen>
  )
};

export default HomeTab;
