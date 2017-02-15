import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import {
  Icon,
} from 'native-base';
import Button from './Button';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';

const DefaultTabBar = React.createClass({
  getDefaultProps() {
    return {
      activeTextColor: 'white',
      inactiveTextColor: 'black',
    };
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold': '200';

    return <Button
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab, this.props.tabStyle, ]}>
        <Text style={[{color: textColor, fontSize: 14.5, fontWeight}, textStyle, ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  render() {

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        <Button style={[styles.additionalButton, {paddingLeft: 10}]}>
          <Icon name="ios-menu" onPress={() => this.props.openDrawer() }/>
        </Button>

        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}

        <Button style={[ styles.additionalButton, {paddingRight: 10,} ]}>
          <Icon name="ios-swap" />
        </Button>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  additionalButton: {
    flex: 0.2,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(null, mapDispatchToProps)(DefaultTabBar);