import React, { memo } from 'react';

import { Image } from 'native-base';

import type { IImageProps } from 'native-base';

export type IFAImageProps = IImageProps;

export const FAImage = memo((props: IFAImageProps) => {
  const { testID, ...baseProps } = props;

  return <Image testID={testID} {...baseProps} />;
});
FAImage.displayName = 'FAImage';
