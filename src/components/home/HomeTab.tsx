import React from 'react';
import Screen from '@components/common/Screen';
import BannerAdList from './BannerAdList';
import CategoryList from './CategoryList';
import PopularList from './PopularList';

const HomeTab = () => {
  return (
    <Screen>
      <BannerAdList />
      <CategoryList />
      <PopularList />
    </Screen>
  )
};

export default HomeTab;
