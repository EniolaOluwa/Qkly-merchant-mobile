import {StyleSheet} from 'react-native';
import {horizontalSpacer, moderateScale} from './responsive';

export const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalSpacer,
    backgroundColor: 'white',
  },
  flex1: {
    flex: 1,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowSpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenterAll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenterAll: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#555',
    shadowOffset: {width: 0.1, height: 0.1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  shadow2: {
    shadowColor: '#555',
    shadowOffset: {width: 0.1, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  noShadow: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  modal: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    padding: moderateScale(40),
  },
});
