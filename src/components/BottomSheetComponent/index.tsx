import React, {useCallback, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BackdropPressBehavior} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import colors from '@utils/colors';
import {horizontalScale, horizontalSpacer} from '@utils/responsive';

type Props = {
  snapPoint: string;
  noPadding?: boolean;
  children: React.ReactNode;
  enablePanDownToClose?: boolean;
  handleChanges?: (index: number) => void;
  sheetref: React.RefObject<BottomSheetModalMethods>;
  pressBehavior?: BackdropPressBehavior;
};

const BottomSheetComponent: React.FC<Props> = ({
  children,
  sheetref,
  snapPoint,
  handleChanges,
  noPadding = false,
  enablePanDownToClose = true,
  pressBehavior = 'close',
}) => {
  const snapArray = new Array(3).fill(snapPoint);
  const snapPoints = useMemo(() => snapArray, [snapPoint]);

  const handleSheetChanges = handleChanges && useCallback(handleChanges, []);

  return (
    <BottomSheetModal
      enableOverDrag={false}
      ref={sheetref}
      index={0}
      enableDynamicSizing={false}
      enablePanDownToClose={enablePanDownToClose}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={style.main}
      style={[style.main, noPadding && {paddingHorizontal: 0}]}
      handleIndicatorStyle={{
        backgroundColor: colors.white,
      }}
      backdropComponent={backdropProps => (
        <BottomSheetBackdrop
          pressBehavior={pressBehavior}
          {...backdropProps}
          appearsOnIndex={1}
          disappearsOnIndex={-1}
        />
      )}>
      {children}
    </BottomSheetModal>
  );
};

export default BottomSheetComponent;

const style = StyleSheet.create({
  main: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: horizontalSpacer,
  },
});
