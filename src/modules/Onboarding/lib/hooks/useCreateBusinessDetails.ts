import {useNavigation} from '@react-navigation/native';
import {UnAuthenticatedNavigationProps} from 'navigation-route-type';
import React, {useCallback, useRef, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

type IDetails =
  | 'businessName'
  | 'description'
  | 'vendor'
  | 'location'
  | 'image';
export const imagePickerOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  includeBase64: false,
  includeExtra: true,
  quality: 0.6,
};

const useCreateBusinessDetails = () => {
  const {navigate} = useNavigation<UnAuthenticatedNavigationProps>();
  const scrollRef = useRef<ScrollView>(null);
  const [details, setDetails] = useState({
    businessName: '',
    description: '',
    vendor: null,
    location: '',
    image: null,
  });
  const [error, setError] = useState({
    businessName: false,
    description: false,
    vendor: false,
    location: false,
    image: false,
  });

  const handleChange = useCallback(
    (value: IDetails, text) => {
      setError(prev => ({...prev, [value]: false}));
      setDetails(prev => ({...prev, [value]: text}));
    },
    [details],
  );
  const handleError = useCallback(
    (value: IDetails) => {
      if (['businessName', 'description'].includes(value)) {
        scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
      }
      setError(prev => ({...prev, [value]: true}));
    },
    [details],
  );

  const selectImage = (response: ImagePickerResponse) => {
    if (response.assets) {
      handleChange('image', response.assets[0]);
    }
    if (response.didCancel) console.log(response.assets);
  };

  const onUploadPress = React.useCallback(() => {
    launchImageLibrary(imagePickerOptions, selectImage);
  }, []);

  const pressBtn = () => {
    const {businessName, description, location, vendor, image} = details;
    if (businessName.length < 4) return handleError('businessName');
    if (description.length < 20) return handleError('description');
    if (vendor === null) return handleError('vendor');
    if (!location) return handleError('location');
    if (image === null) return handleError('image');
    navigate('BvnScreen');
  };

  return {
    onUploadPress,
    image: details?.image,
    error,
    ...details,
    handleChange,
    scrollRef,
    pressBtn,
  };
};

export default useCreateBusinessDetails;
