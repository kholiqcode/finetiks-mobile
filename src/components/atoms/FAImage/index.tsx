import React from 'react';

import { Image } from 'native-base';

import type { IImageProps } from 'native-base';

export type FAImageProps = IImageProps;

export default React.memo(function FAImage(props: FAImageProps) {
  const { testID, ...baseProps } = props;

  return <Image testID={testID} {...baseProps} />;
});
