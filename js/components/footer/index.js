import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import navigateTo from '../../actions/sideBarNav';
import { setCurrentItemId } from '../../actions/imageSwiper';
import {
  DETAILS,
} from '../../constants/route';
const footerImage = require('./../../../images/footer.png');
import Icon from 'react-native-vector-icons/Entypo';
const getCurrentItem = (currentSwiperIndex, items) => items[currentSwiperIndex];

const getAttribute = (currentSwiperIndex, items, key) => {
  const currentItem = getCurrentItem(currentSwiperIndex, items);
  return currentItem ? currentItem[key] : null;
};

const MyFooter = ({currentSwiperIndex, items, navigateTo, setCurrentItemId}) => (
  <View>
    <View style={{backgroundColor: '#606162', height: 0.3}}></View>
    <View style={{backgroundColor: 'black', height: 59, flex: 1}}>

      <View style={{position: 'absolute', flexDirection: 'row'}}>
        <View style={{width: 300}}>
          <Text style={{ fontSize: 18, fontWeight: '400', color: 'white', marginTop: 8, marginLeft: 10}}>
            {getAttribute(currentSwiperIndex, items, 'original_title')}
          </Text>
        </View>

      </View>

      <Image
        resizeMode="stretch"
        style={{height: null, width: null, flex: 1}}
        source={footerImage}
      >
        <View style={{position: 'absolute', left: 320,alignItems: 'center', backgroundColor: 'transparent'}}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress = {() => {
              navigateTo(DETAILS)
              setCurrentItemId(getAttribute(currentSwiperIndex, items, 'id'))
            }}>
            <Icon name="archive" size={27} color="white" style={{paddingTop: 5}}/>
            <Text style={{color: 'white', fontSize: 11, paddingTop: 5 }}>Details</Text>
          </TouchableOpacity>
        </View>
      </Image>
    </View>
  </View>
);

const mapStateTopProps = state => ({
  currentSwiperIndex : state.currentSwiperIndex,
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  setCurrentItemId: id => dispatch(setCurrentItemId(id)),
})

export default connect(mapStateTopProps, mapDispatchToProps)(MyFooter);