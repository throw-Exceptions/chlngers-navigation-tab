import React from 'react';
import Screen from '@components/common/Screen';
import BannerAdList from './BannerAdList';
import CategoryList from './CategoryList';

const HomeTab = () => {
  return (
    <Screen>
      <BannerAdList />
      <CategoryList />
    </Screen>
  )
};

export default HomeTab;
