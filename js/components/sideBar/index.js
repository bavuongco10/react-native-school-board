import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import myTheme from '../../themes/base-theme';

import styles from './style';

import {
  HOME,
  BLANK_PAGE,
} from '../../constants/route';

const drawerCover = require('../../../images/drawer-cover.png');
const drawerImage = require('../../../images/logo-kitchen-sink.png');

const SideBar = ({navigateTo}) => (
  <Content theme={myTheme} style={styles.sidebar} >
    <Image source={drawerCover} style={styles.drawerCover}>
      <Image
        square
        style={styles.drawerImage}
        source={drawerImage}
      />
    </Image>

    <List>
      <ListItem button onPress={() => navigateTo(HOME)} >
        <Text>Home</Text>
      </ListItem>
      <ListItem button onPress={() => navigateTo(BLANK_PAGE)} >
        <Text>Blank Page</Text>
      </ListItem>
    </List>
  </Content>
);


const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
});

export default connect(null, mapDispatchToProps)(SideBar);
