import {FlatList} from 'react-native';
import React from 'react';
import EachProduct from '@modules/Shop/components/EachProduct';

const MainProducts = () => {
  return (
    <FlatList
      data={[...Array(10)]}
      keyExtractor={(_, i) => i.toString()}
      renderItem={() => <EachProduct />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MainProducts;
