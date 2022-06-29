import React, { memo } from 'react';

import { Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import type { IIconProps } from 'native-base';

export type IFAIconProps = {
  type?: 'font-awesome' | 'ionicons' | 'feather';
} & IIconProps;

export const FAIcon = memo((props: IFAIconProps) => {
  const { testID, type, ...baseProps } = props;

  let iconType: typeof FontAwesome;

  switch (type) {
    case 'ionicons':
      iconType = Ionicons;
      break;
    case 'feather':
      iconType = Feather;
      break;

    default:
      iconType = FontAwesome;
      break;
  }

  return <Icon testID={testID} as={iconType} {...baseProps} />;
});
FAIcon.displayName = 'FAIcon';
