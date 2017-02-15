import React from 'react-native';
const { StyleSheet, Dimensions } = React;

const { width } = Dimensions.get('window');

export default StyleSheet.create ({
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  imageBackDrop: {
    width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)'
  },

  loadingImage: {
    width: 60,
    height: 60
  },

  scoreButton: {
    top: 500,
    left: 30,
    position: 'absolute',
  },

  linearGradient: {
    top: 0,
    left: 0,
    right: 0,
    height: 248,
    position: 'absolute'
  },

  cardContainer: {
    flex: 1,
    position: 'absolute',
    top: 200,
    right: 16,
    left: 16,
    flexDirection: 'row'
  },

  cardImage: {
    height: 184,
    width: 135,
    borderRadius: 3
  },

  cardDetails: {
    paddingLeft: 10,
    flex: 1,
    paddingTop: 50
  },

  cardTitle: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
    paddingTop: 10
  },

  cardTagline: {
    color: 'black',
    fontSize: 15
  },

  cardGenre: {
    flexDirection: 'row'
  },

  cardGenreItem: {
    textAlign: 'left',
    fontSize: 11,
    marginRight: 5,
    color: 'black'
  },

  cardNumbers: {
    flexDirection: 'row',
    marginTop: 5
  },

  cardStar: {
    flexDirection: 'row'
  },

  cardStarRatings: {
    marginLeft: 5,
    fontSize: 12,
    color: 'white'
  },

  cardRunningHours: {
    marginLeft: 5,
    fontSize: 12
  },

});