import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import {
  Dimensions,
  DimensionValue,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from '@utils/responsive';
import BackArrow from '@assets/vector/BackArrow';
import TextComponent from '@components/Text/textComponent';
import colors from '@utils/colors';
const {width} = Dimensions.get('window');

const dialPadSize = width * 0.16;

type PropsType = {
  pin: string;
  maxLength: number;
  keypadHeight?: DimensionValue;
  setPin: Dispatch<SetStateAction<string>>;
  defaultNumberArray?: any[];
};

const QklyKeyboard = memo(
  ({
    setPin,
    maxLength,
    pin,
    keypadHeight,
    defaultNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'X'],
  }: PropsType) => {
    const numbers = useMemo(() => defaultNumberArray, [defaultNumberArray]);

    const deleteLastDigit = useCallback(() => {
      if (pin.length > 0) {
        setPin(prevPin => prevPin.slice(0, -1));
      }
    }, [pin, setPin]);

    const setPinValue = useCallback(
      (val: string) => {
        if (pin.length < maxLength) {
          setPin(prev => `${prev}${val}`);
        }
      },
      [maxLength, pin, setPin],
    );

    return (
      <View style={styles.wrapper}>
        <FlatList
          columnWrapperStyle={styles.columnWrapper}
          data={numbers}
          numColumns={3}
          nestedScrollEnabled
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                disabled={item === null} // make the empty space on the dialpad content unclickable
                onPress={
                  item === 'X' ? deleteLastDigit : () => setPinValue(`${item}`)
                }>
                <View
                  style={[
                    {
                      width: dialPadSize,
                      height: dialPadSize,
                    },
                    styles.dialPadContainer,
                    [1, 4, 7, null].includes(item) && styles.alignStart,
                    [3, 6, 9, 'X'].includes(item) && styles.alignEnd,
                    keypadHeight && {height: keypadHeight},
                  ]}>
                  {item === 'X' ? (
                    <BackArrow />
                  ) : (
                    <TextComponent.Bold
                      color={colors.neutral[250]}
                      style={styles.number}>
                      {item}
                    </TextComponent.Bold>
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  },
);

export default QklyKeyboard;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  alignEnd: {
    // alignItems: 'flex-end',
    marginLeft: moderateScale(5),
  },
  alignStart: {
    // alignItems: 'flex-start',
    marginRight: moderateScale(5),
  },
  number: {
    lineHeight: 36,
  },
  dialPadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(10),
  },
  columnWrapper: {
    width: '100%',
    justifyContent: 'space-between',
  },
});
