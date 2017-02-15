import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ImageSwiper from '../imageSwiper';
import TabTwo from '../tabs/tabTwo';
import CustomTabBar from '../customTabBar';
import {
  ScrollView,
} from 'react-native';

export default () => (
  <ScrollableTabView
    renderTabBar={()=><CustomTabBar backgroundColor="#ef2525"/>}
  >
    <ScrollView tabLabel="NOW PLAYING">
      <ImageSwiper/>
    </ScrollView>

    <ScrollView tabLabel="COMING SOON">
      <TabTwo />
    </ScrollView>

  </ScrollableTabView>
);